import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'

// var myComponent =() => import('../components/Login.vue');

Vue.use(Router)

const router = new Router({
	routes: [
		// 非懒加载
		{
			path: '/',
			name: 'Hello',
			component: Hello,

			// component(resolve111) {
			// 	require.ensure(['@/components/Hello.vue'], () => {
			// 		resolve111(require('@/components/Hello.vue'));
			// 	});
			// },

			// 设置 mata 字段，表示该字段需要验证
			meta: {
				requireAuth: true
			}
		},

		// 懒加载 1: require(COMPONENT, resolve) 官方异步组件方式. https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6
		{
			path: '/login',
			name: 'login',
			component: 
				(resolve111) => 
				// 这个特殊的 `require` 语法将会告诉 webpack
				// 自动将你的构建代码切割成多个包，这些包
				// 会通过 Ajax 请求加载
				require(['@/components/Login.vue'], resolve111)


			// component(resolve) {
			// 	require.ensure(['@/components/Login.vue'], () => {
			// 		resolve(require('@/components/Login.vue'));
			// 	});
			// }
		},

		// 懒加载 2: component 作为方法调用, 采用 require.ensure()
		{
			path: '/register',
			name: 'register',
			component(resolve222) {
				require.ensure(['@/components/Login.vue'], () => {
					resolve(require('@/components/Login.vue'));
				});
			}
		},

		// 简单设置404页面
		// 懒加载 3: 采用 babel 的 import 语法实现(此项目在 webpack 配置中没有采用 babel-polyfill, 所以会报错)
		{
			path: '*',
			// component = () => import('@/components/404.vue'),
			component(resolve) {
				require.ensure(['@/components/404.vue'], () => {
					resolve(require('@/components/404.vue'));
				});
			},
			hidden: true
		}
	]
})

// 验证 token，存在才跳转
// This is 全局前置守卫: https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB

router.beforeEach((to, from, next) => {
	let token = localStorage.getItem('token')


	console.log(to);


	if(to.meta.requireAuth) {
		if(token) {
			next()
		} else {
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			})
		}
	} else {
		next()
	}
})

export default router
