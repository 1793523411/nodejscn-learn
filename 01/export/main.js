const color = require('chalk')
const car = require('./car')

console.log(color.yellow(car))
console.log(color.bgRed(car.brand))