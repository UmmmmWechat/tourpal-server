var  index_fn =  async ctx => {
    ctx.response.body = 'hello world'
}
// 这个Index可以用来获取 openId
module.exports = {
    'GET /index': index_fn
}