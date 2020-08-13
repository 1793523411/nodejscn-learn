const https = require('https')

const option = {
    hostname: 'www.baidu.com',
    port: 80,
    path: '/',
    method: 'GET'
}

const req = https.request(option,res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data',d => {
        process.stdout.write(d)
    })
})

req.on('error',error => {
    console.log(error)
})