/**
 * 这个文件是用来注册所有的controller 和 路由的
 */
const fs = require('fs')

function scanControllers (router, dir) {
    let files = fs.readdirSync(__dirname + '/' + dir)
    files.forEach(
        file => {
            let path = dir + '/' + file
            if(file.endsWith('.js')) {
                console.log(`process controller: ${file}...`);
                let mapping = require(__dirname + '/' + path);
                addMapping(router, mapping);
            } else {
                // 是否文件夹
                fs.stat(path, (err, stat) => {
                    if (err) return
                    if (stat.isDirectory()) {
                        scanControllers(router, path)
                    }
                })
            }
        }
    )
}

function addMapping (router, mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else if (url.startsWith('PUT ')) {
            var path = url.substring(4);
            router.put(path, mapping[url]);
            console.log(`register URL mapping: PUT ${path}`);
        } else if (url.startsWith('DELETE ')) {
            var path = url.substring(7);
            router.del(path, mapping[url]);
            console.log(`register URL mapping: DELETE ${path}`);
        }else if (url.startsWith('PARAM ')) {
            var path = url.substring(6);
            router.param(path, mapping[url]);
            console.log(`register URL mapping: PARAM ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

module.exports = function (dir) {
    let controllers_dir = dir || 'controllers'
    let router = require('koa-router')()
    console.log('-----------------------')
    console.log('init controllers...')
    scanControllers(router, controllers_dir)
    return router.routes()
}