const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.send('你好呀世界')
})

const server = app.listen(3000,() => {
    console.log('服务器已就绪')
})

process.on('SIGALRM',() => {
    server.close(() => {
        console.log('进程已终止')
    })
})