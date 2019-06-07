const CommonController = require('../CommonController');
const SignUp = require('../../serivice_impl/tourist/SignUp');

let fn = async (ctx, next) => {
    const body = ctx.request.body;
    let tourist = body.tourist;

    await CommonController(
        ctx,
        next,
        {
            tourist
        },
        () => SignUp(tourist)
    )
};

module.exports = {
    'POST /sign-up/tourist': fn
};