const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const favicon = require('serve-favicon')
const logger = require('morgan')
const config = require('config-lite')
const compression = require('compression')
const app = express()

// proxy config:
const proxyrouter = express.Router()
const ProxyController = require('./server/controller/proxyroutes.js')
ProxyController(proxyrouter)

// server config:
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression({ threshold: 0 }))


// start server:
app.use('/api', proxyrouter)

app.use(function (req, res, next) {
	var err = new Error('This page not found');
	err.status = 404;
	next(err)
})

app.listen(3000, function () {
	console.log(`Server running in port ${config.port}`)
})
