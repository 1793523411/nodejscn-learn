const http = require('http')

const fs = require('fs')

// const server = http.createServer(function(req,res){
//     //readFile() 读取文件的全部内容，并在完成后调用回调函数,如果文件很大，该操作将花费很多时间
//     fs.readFile(__dirname+'/test.txt',(err,data) => {
//         res.end(data)
//     })
// }
// )
const server = http.createServer(function(req,res){
    const stream = fs.createReadStream(__dirname+'/test.txt')
    // 获取源，并将其通过管道传输到目标,该pipe()方法的返回值是目标流，这是非常方便的事情，它使我们可以链接多个pipe()调用
    stream.pipe(res)
})

server.listen(3000)