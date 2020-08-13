

let done = true
const isItDoneYet = new Promise((resolve,reject) =>{
    if(done){
        const workDone = '这是创建的东西'
        resolve(workDone)
    }else{
        const why = '仍在处理其他事情'
        reject(why)
    }
})