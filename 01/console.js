// const x = "x";
// const y = "y";
// console.log(x, y);

// console.log("我的%s已经%d岁", "猫", 2);
// console.log("%o", Number);

// %s 会格式化变量为字符串
// %d 会格式化变量为数字
// %i 会格式化变量为其整数部分
// %o 会格式化变量为对象

// setTimeout(() => {
//   console.clear();
// }, 3000);
const x = 1;
const y = 2;
const z = 3;

//元素计数
// count 方法会对打印的字符串的次数进行计数，并在其旁边打印计数：
console.count("x 的值为 " + x + " 且已经检查了几次？");
console.count("x 的值为 " + x + " 且已经检查了几次？");
console.count("y 的值为 " + y + " 且已经检查了几次？");

const orange = ['橙子','橙子']
const apples = ['苹果']

orange.forEach(fruit => {
    console.count(fruit)
})

apples.forEach(fruit => {
    console.count(fruit)
})


const function2 = () => console.trace()
const function1 = () => function2()
function1()

const doSomething = () => console.log('测试')

const measureDoingSomething = () => {
    //?还得一样
    console.time('doSomething()')
    doSomething()
    console.timeEnd('doSomething()')
}
measureDoingSomething()

console.log('\x1b[33m%s\x1b[0m','你好')

const chalk = require('chalk')
console.log(chalk.blue('你好'))
console.log(chalk.red('你好'))
console.log(chalk.green('你好'))
console.log(chalk.magenta('你好'))
console.log(chalk.cyan('你好'))
console.log(chalk.bgMagenta('你好'))

const ProgressBar = require('progress')

const bar = new ProgressBar(':bar',{total: 100})
const timer = setInterval(() => {
    bar.tick()
    if(bar.complete) {
        clearInterval(timer)
    }
},100)