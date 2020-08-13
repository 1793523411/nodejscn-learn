const buf = Buffer.from('Hey!')

console.log(buf[0])
console.log(buf[1])
console.log(buf[2])
// 72
// 101
// 121
// 这些数字是Unicode代码
console.log(buf.toString())
console.log(buf.length)

for(const item of buf){
    console.log(item)
}

let bufcopy = Buffer.alloc(2)
//默认情况下，您将复制整个缓冲区。另外3个参数可让您定义开始位置，结束位置和新缓冲区长度：
buf.copy(bufcopy,0,0,2)
console.log(bufcopy.toString())

const buf2 = Buffer.alloc(1024)

buf2.write('Hey!')
console.log(buf2[1])

console.log('-----------')

// 如果要创建缓冲区的部分可视化，则可以创建切片。切片不是副本：原始缓冲区仍然是真相的来源。如果那改变了，您的切片也会改变。
// 使用slice()方法创建它。第一个参数是起始位置，您可以指定第二个参数作为结束位置：

const bufs = Buffer.from('Hey!')
bufs.slice(0).toString() //Hey!
const slice = bufs.slice(0, 2)
console.log(slice.toString()) //He
bufs[1] = 111 //o
console.log(slice.toString()) 


const buf3 = Buffer.allocUnsafe(1024)
// 虽然两者alloc并allocUnsafe分配一个Buffer以字节为单位指定的大小，的Buffer创建通过alloc将初始化用零和由创建的一个allocUnsafe将被未初始化。这意味着，虽然allocUnsafe与相比alloc要快得多，但是分配的内存段可能包含可能敏感的旧数据

// Buffer读取内存时，如果内存中存在较旧的数据，则可以对其进行访问或泄漏。这才是真正造成allocUnsafe不安全的原因，使用时必须格外小心