const os = require('os')

console.log(os.arch())//x64

console.log(os.cpus())//返回8个核的信息

console.log(os.endianness())//LE

console.log(os.freemem())//5868322816

console.log(os.homedir())//C:\Users\hp

console.log(os.hostname())//

console.log(os.loadavg())//[ 0, 0, 0 ]

// console.log(os.networkInterfaces())//返回系统上可用网络接口的详细信息。

console.log(os.platform())//win32

console.log(os.release())//10.0.18362//返回标识操作系统版本号的字符串

console.log(os.tmpdir())//C:\Users\hp\AppData\Local\Temp

console.log(os.totalmem())//12763766784

console.log(os.type())//Windows_NT

console.log(os.uptime())//180264//返回自上次重新启动以来计算机一直在运行的秒数

console.log(os.userInfo())