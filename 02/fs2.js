const fs = require('fs')
//获取文件属性
fs.stat('./fs.js',(err,stats) => {
    if(err){
        console.log(err)
        return
    }
    console.log(stats)
    // Stats {
    //     dev: 174783238,
    //     mode: 33206,   
    //     nlink: 1,      
    //     uid: 0,        
    //     gid: 0,        
    //     rdev: 0,
    //     blksize: 4096,
    //     ino: 1688849863324833,
    //     size: 269,
    //     blocks: 0,
    //     atimeMs: 1596713858924.4983,
    //     mtimeMs: 1596713858924.4983,
    //     ctimeMs: 1596713858924.4983,
    //     birthtimeMs: 1596713620994.5657,
    //     atime: 2020-08-06T11:37:38.924Z,
    //     mtime: 2020-08-06T11:37:38.924Z,
    //     ctime: 2020-08-06T11:37:38.924Z,
    //     birthtime: 2020-08-06T11:33:40.995Z
    //   }
    console.log(stats.isFile())
})


try{
    const stats = fs.statSync('./fs.js')
    console.log(stats)
}catch(err){
    console.log(err)
}

