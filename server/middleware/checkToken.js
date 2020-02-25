// 监测 token 是否过期
const jwt = require('jsonwebtoken')
module.exports = function (req, res, next) {
	console.log(req.headers)
	console.log('----==== authorization ====---- ', req.headers['authorization'])
	let token = req.headers['authorization'].split(' ')[1]
	// 解构 token，生成一个对象 { name: xx, iat: xx, exp: xx }
	// jwt.decode() 不验证, 只是提取数据; jwt.verify() 用 secret 验证.
	let decoded = jwt.decode(token)
	console.log('----==== decoded ====---- ', decoded)
	console.log('----==== verified ====---- ', jwt.verify(token, 'secret'))
	// console.log(decoded.exp)
	// console.log(Date.now() / 1000)
	// 监测 token 是否过期

	

	if(token && decoded.exp <= Date.now() / 1000) {
		return res.json({
			code: 401,
			message: 'token过期，请重新登录'
		})
	}

	// next(false)

	// if(tocken) {
	// 	next();
	// } else {
	// 	console.log('----------- no token ---------')
	// 	next(false)
	// }



	
	next();
}
