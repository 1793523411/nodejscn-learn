const fs = require('fs')
const path = require('path')
const floaderName = './test'

try {
    if(!fs.existsSync(floaderName)){
        fs.mkdirSync(floaderName)
    }
} catch (err) {
    console.log(err)
}

const floderPath = './test'

console.log(fs.readdirSync(floderPath))

const res = fs.readdirSync(floderPath).map(fileName => {
    return path.resolve(floderPath,fileName)
})

console.log(res)

const isFile = fileName => {
    return fs.lstatSync(fileName).isFile()
}

let res2 = fs.readdirSync(floderPath).map(fileName => {
    return path.resolve(floderPath,fileName)
}).filter(isFile)
console.log(res2)

fs.rename('./test','./test2',err => {
    if(err){
        console.log(err)
        return
    }
})

try {
    fs.renameSync('./test2','./test')
} catch (err) {
    console.log(err)
}

fs.rmdir('./test2',err => {
    if(err){
        console.log(err)
    }
})