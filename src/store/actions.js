import * as types from './types'

export default {
	// 方式 1: 官方的 action 的 context 写法
	UserLogin: (context, data) => context.commit(types.LOGIN, data),
	// UserLogin({ commit }, data) {
	// 	commit(types.LOGIN, data)
	// },

	// 方式 2: ES6写法, 变量解构赋值后 { commit } 的 commit= context.commit 
	UserLogout({ commit }) {
		commit(types.LOGOUT)
	},

	UserName({ commit }, data) {
		commit(types.USERNAME, data)
	}
}
