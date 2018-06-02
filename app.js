const Koa = require('Koa')
const router = require('koa-router')()
const controller = require('./controller')
const logger = require('./utils/logger')
const bodyParser = require('koa-bodyparser')
const app = new Koa()


app.use(bodyParser())
app.use(logger)
app.use(controller())

app.listen(3000)
console.log('app start at port 3000...')