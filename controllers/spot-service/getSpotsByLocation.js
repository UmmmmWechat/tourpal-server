// querySpots(Location location, int lastIndex);
var fn = async (ctx, next) => {
    let location = ctx.query.location
    let lastIndex = ctx.query.lastIndex || 0

    if (!location) {
        await next()
    } else {
        location = JSON.parse(location)
        ctx.body = JSON.stringify([{location:location}])
    }
}

module.exports = {
    'GET /spots/by-location': fn
}