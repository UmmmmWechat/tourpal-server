const Koa = require('koa')
require('koa-router')()
const controller = require('./controller')
const logger = require('./utils/logger')
require('./utils/cache')
const bodyParser = require('koa-bodyparser')
require('./schedulers')
const app = new Koa()


// app.use(bodyParser())
app.use(bodyParser())
app.use(logger)
app.use(controller())


app.listen(3000)
console.log('app start at port 3000...')