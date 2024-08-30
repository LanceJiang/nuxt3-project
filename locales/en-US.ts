import common from './en-US/common';
import home from './en-US/home';
// console.error(home, 'home us')
// const modules = import.meta.glob('./en-US/**/*.ts', { eager: true })
export default {
	lang: 'en-US',
	common,
	home,
	header: {
		title: 'Home Title'
	},
}
