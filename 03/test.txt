const fs = require('fs')

//获取文件描述符
fs.open('./http.js','r',(err,fd) => {
    ////fd is our file descriptor
    console.log(fd)
})

try {
    const fd2 = fs.openSync('./http.js','r')
    console.log(fd2)
} catch (err) {
    console.error(err)
}

// console.log(fd2)