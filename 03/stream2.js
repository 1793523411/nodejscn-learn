//可读流
const Stream = require('stream')
const readableStream = new Stream.Readable()

readableStream._read = () => {}

//或

readableStream.push('hi!')
readableStream.push('ho!')


//可写流
const writeableStream = new Stream.Writable()

writeableStream._write = (chunk,encoding,next) => {
    console.log(chunk.toString())
    next()
}

process.stdin.pipe(writeableStream)

readableStream.push(writeableStream)

readableStream.on('readable',() => {
    console.log(readableStream.read())
})

writableStream.write('hey!\n')

writableStream.end()