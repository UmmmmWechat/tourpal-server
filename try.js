var http = require('http')
var options = {  
    port: 3000,  
    path: '/spots/by-id?id=1',  
    method: 'GET',  
    headers: {  
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'  
    }  
};  
var req = http.request(options, function(res) {
    // console.log(res.body)
    res.setEncoding('utf8')
    res.on(
        'data',
        function (chunk) {
            console.log(chunk)
        }
    )
})

req.on('error', function (e) {  
    console.log('problem with request: ' + e.message);  
});  

req.end()