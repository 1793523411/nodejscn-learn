const http = require('http')
const { hostname } = require('os')

const host = '127.0.0.1'
const port = 3000

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end('你好呀，世界')
})

server.listen(port, hostname, () => {
    console.log(`服务器在http://127.0.0.1:${port}运行`)
    console.log(process.env)
    console.log(process.env.NODE_ENV)
})

process.on('SIGALRM',() => {
    server.close(() => {
        console.log('进程终止')
    })
})