import { hash } from 'ohash'
import { checkStatus } from '@/api/helper/checkStatus'
import { getToken } from '@/api/user'
import { HttpResponse } from '@/api/interface'

// 请求体拓展
function configOptions(options: any = {}) {
	// console.log(apiUrl, 'baseUrl', useRuntimeConfig())
	options.headers = { 'access-token': getToken() }
	if (!options.baseURL) {
		// console.log(import.meta.env.VITE_API_URL, 'VITE_API_URL')
		options.baseURL = import.meta.env.VITE_API_URL
	}
	return options
}

/**
 * api请求封装
 * @param { String } url 请求地址
 * @param { Object } options 请求配置项
 */
const fetch_ = (url: string, options?: object): Promise<any> => {
	const {
		public: { apiUrl },
	} = useRuntimeConfig()
	// console.log(apiUrl, 'baseUrl', useRuntimeConfig())
	/*!// baseUrl 在生产环境中拿不到，暂时不知道什么原因，这里做一下兼容处理
	const _baseUrl = apiUrl ?? 'https://bdapi.hyinsight.com/admin-api'*/
	const reqUrl = apiUrl + url

	// 不设置key，始终拿到的都是第一个请求的值，参数一样则不会进行第二次请求
	const key = hash(JSON.stringify(options) + url)

	const _options = configOptions(options)

	return new Promise((resolve, reject) => {
		useFetch(reqUrl, { ..._options, key })
			.then(({ data, error, refresh }) => {
				// 强制刷新数据，避免重复请求
				refresh()
				if (error.value) {
					reject(error.value)
					return
				}
				const dataValue: any = data.value

				// 请求成功 200
				if (dataValue && dataValue.code === 200) {
					resolve(dataValue)
				} else {
					// 请求失败
					const e = {
						code: dataValue?.code,
					}
					checkStatus(e.code as number)
				}
			})
			.catch((err: any) => {
				reject(err)
			})
	})
}

export const fetch = (url: string, options?: object): Promise<any> => {
	return $fetch(url, configOptions(options))
}

export default new (class Http {
	get<T>(url: string, params?: object): Promise<HttpResponse<T>> {
		return fetch_(url, { method: 'get', params })
	}

	post<T>(url: string, body?: object): Promise<HttpResponse<T>> {
		return fetch_(url, { method: 'post', body })
	}

	put<T>(url: string, body?: object): Promise<HttpResponse<T>> {
		return fetch_(url, { method: 'put', body })
	}

	delete<T>(url: string, body?: object): Promise<HttpResponse<T>> {
		return fetch_(url, { method: 'delete', body })
	}
})()
