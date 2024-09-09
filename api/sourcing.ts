import Http from '../utils/request'
import { Login } from './interface' // todo...
// const VITE_API_URL = 'https://bdapi.hyinsight.com/admin-api'
export const getRecommend = () => {
	return Http.get('/article/list')
}
export const getRecommendAll1 = () => {
		/*fetch(
			// 'https://bdapi.hyinsight.com/admin-api/system/config-currency/page?pageNo=1&pageSize=100&status=1'
			'https://bdapi.hyinsight.com/admin-api/system/config-currency/page',
			{
				method: 'get',
				query: {
					pageNo: 1,
					pageSize: 100,
					status: 1
				},
			}
		).then(res => {
			console.log('fetch', res)
		})*/
		// ?pageNo=1&pageSize=100&status=1
	return $fetch(
		'https://bdapi.hyinsight.com/admin-api/system/config-currency/page',
		{
			method: 'get',
			query: {
				pageNo: 1,
				pageSize: 100,
				status: 1
			},
		}
	)
}

// 获取类别摘要
export const queryOpInfo = (body: any): Promise<any> => {
	return $fetch('/distributor/op-info/create', {
		method: 'post',
		body,
		baseURL: 'https://bdapi.hyinsight.com/admin-api' // todo  .env.xxx
	})
}
