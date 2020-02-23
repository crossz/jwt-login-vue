import * as types from './types'

const mutations = {
	// 1) 标准实现方法:
	/* ES2015 的解构赋值方式(左侧可以是{}, 也可以是[], 和 actions.js 中的 {commit} 类似的赋值风格)
	变量声明语法十分的直接：左边是一个变量名，右边可以是一个数组：[] 的表达式或一个对象：{} 的表达式，等等。解构赋值允许我们将右边的表达式看起来也像变量声明一般，然后在左边将值一一提取。
	*/
	[types.LOGIN]: (state, data) => {
		localStorage.setItem('token', data)
		// localStorage.token = data
		state.token = data
	},
	// 2) 常量作为与 Action 对应的具体方法名:
	LOGOUT: (state) => {
		localStorage.removeItem('token');
		state.token = null
	},
	// 3) 函数名与 Action 对应的 commit 的 type 相对应:
	USERNAME(state, data) {
		localStorage.setItem('username', data)
		state.username = data
	}
}
export default mutations
