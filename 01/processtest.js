// process.argv.forEach((val,index)=>{
//     console.log(`${index}: ${val}`)
// })

// let args = process.argv.slice(2)

// console.log(args)

const args = require('minimist')(process.argv.slice(2))
console.log(args['name'])