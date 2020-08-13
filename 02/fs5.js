const fs = require('fs')

const content = 'Some content'

fs.writeFile('./test.txt',content,err => {
    if(err){
        console.log(err)
    }
})

try {
    const data = fs.writeFileSync('./test2.txt',content+'！！！Sync')
    console.log(data)
} catch (error) {
    console.log(error)    
}

fs.appendFile('./test.txt','这是一段追加的内容',err => {
    if(err) console.log(err);
    return
})