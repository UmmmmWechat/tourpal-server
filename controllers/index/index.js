var  index_fn =  async ctx => {
    ctx.response.body = 'hello world'
}

module.exports = {
    'GET /index': index_fn
}