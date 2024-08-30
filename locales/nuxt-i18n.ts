import zh_CN from './zh-CN'
import en_US from './en-US'
console.error(zh_CN, 'zh_CN.........')
console.error(en_US, 'en_US.........')
// You can use `defineI18nConfig` to get type inferences for options to pass to vue-i18n.
export default defineI18nConfig(() => {
	return {
		legacy: false,
		locale: 'en',
		messages: {
			'zh-CN': zh_CN,
			'en-US': en_US
		}
	}
})
