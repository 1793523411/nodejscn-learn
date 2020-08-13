const fs = require('fs')

// fs.readFile('./fs.js','utf-8',(err,data) => {
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log(data)
// })

//同步先于上面那个执行
try {
    const data = fs.readFileSync('./fs.js','utf-8')
    console.log(data)
} catch (error) {
    console.log(error)
}