const fs = require('fs')
const { resolve } = require('path')

const getFile = (fileName) => {
    return new Promise((resolve,reject) => {
        fs.readFile(fileName,(err,data) => {
            if(err){
                reject(err)
                return
            }
            resolve(data)
        })
    })
}

getFile('./promise.js').then(data => console.log(data)).catch(err => console.log(err))