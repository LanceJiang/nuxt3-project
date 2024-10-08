import moment from 'moment'
moment.updateLocale('zh-cn', {
	relativeTime: {
		future: '%s内',
		past: '%s前',
		s: '几秒',
		m: '1 分钟',
		mm: '%d 分钟',
		h: '1 小时',
		hh: '%d 小时',
		d: '1 天',
		dd: '%d 天',
		M: '1 个月',
		MM: '%d 个月',
		y: '1 年',
		yy: '%d 年',
	},
})

/**
 * 格式化时间
 * @param timestamp
 * @returns
 */
export const recommendDate = (timestamp: number | string) => {
	return moment(Number(timestamp) * 1000).fromNow()
}

export function isServer() {
	return typeof window === 'undefined'
}

// 判断是否为小屏 同 theme.screens.max-m width
export const isMobile = () => {
	if(isServer()) return false
	const userAgent = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
	const screenCheck = window.matchMedia("only screen and (max-width: 750px)").matches
	// console.error(userAgent, 'userAgent, ', screenCheck)
	return userAgent || screenCheck
}

export const jumpUrl = (url: string, target = '_blank') => {
	if (url) window.open(url, target)
}
