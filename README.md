# vue-login

这是一个基于 JWT 实现的 前后端 login 的 demo. 

### 技术栈:

* 前台：vue & vue-router & vuex & vue-cli(webpack) & element-ui
* 后台： nodejs (express) + mongodb
* 前后台交互： axios
* 单点登录： jsonwebtoken

### 调配部分:
1. vue-router(lazy loading) for express.Router()

    做了几种不同的 route 和 compoment 的实现方式对比.

1. vuex tweaked:

    针对 action 和 mutation 中 { commit } 和 [ TYPE ] 的 ES6 赋值方式做了对比.

1. JWT 在 server 和 client 端具体实现方法调试:

    服务器端 (生成 token) 和客户端再调用 http (GET) 方法时在 header 中追加 token 的逻辑.


## Build Setup

### 1. Install/Start Mongodb

This is the database service.

``` bash
# install mongodb (thru Homebrew on Mac)
brew tap mongodb/bre
brew install mongodb-community

# start mongodb service 
brew services start mongodb-community

# stop mongodb service
brew services start mongodb-community
```

### 2. Run Web Server 

This is the server side logics for JWT.

``` bash
# start express server
node server.js
```

### 3. Run Local Vue client 

This is the client side logics for JWT.

``` bash
# start localhost client
npm i
npm run dev
```


----

## Forked 原项目介绍:
>  这是一个基于 vue & axios & nodejs(express)  & mongodb (mongoose) 的登录／注册demo，面向 vue 初学者，场景简单，但涵盖非常多的 vue 基本操作，且有较详细的注释，帮助大家快速上手 vue 相关操作。

> 项目所用技术相关信息您可以浏览我的博客，有专文介绍： [vue-login 通过一个项目带你走进vue全栈开发](https://ykloveyxk.github.io/2017/03/21/vue-login-%E9%80%9A%E8%BF%87%E4%B8%80%E4%B8%AA%E9%A1%B9%E7%9B%AE%E5%B8%A6%E4%BD%A0%E8%B5%B0%E8%BF%9Bvue%E5%85%A8%E6%A0%88%E5%BC%80%E5%8F%91/)


