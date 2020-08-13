const fs = require('fs')

fs.rename('./test.txt','./rename.txt',err => {
    if(err){
        console.log(err)
    }
})

//脚本的执行将阻塞，直到文件操作成功
try {
    fs.renameSync('./test2.txt','./rename2.txt')
} catch (err) {
    console.log(err)
}