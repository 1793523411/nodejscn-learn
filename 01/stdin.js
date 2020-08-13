// const readline = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// readline.question('你的名字是？',name => {
//     console.log(`你好 ${name}！`)
//     readline.close()
// })

const inquirer = require('inquirer')
var question = [
    {
        type:'input',
        name:'name',
        message:'你叫什么名字'
    }
]

inquirer.prompt(question).then(answer => {
    console.log(`你好${answer['name']}!`)
})