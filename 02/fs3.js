const path = require('path')
const { normalize } = require('path')

const notes = 'E:\\desktop\\start\\node\\nodejscn-learn\\02\\fs3.js'

console.log(path.dirname(notes))
console.log(path.basename(notes))
console.log(path.extname(notes))

// E:\desktop\start\node\nodejscn-learn\02
// fs3.js
// .js

console.log(path.basename(notes,path.extname(notes)))

const name='joe'

console.log(path.join('/','users',name,'notes.txt'))//\users\joe\notes.txt

console.log(path.resolve('/','users',name,'notes.txt'))//E:\users\joe\notes.txt
console.log(path.resolve('./','users',name,'notes.txt'))//E:\desktop\start\node\nodejscn-learn\02\users\joe\notes.txt
console.log(path.resolve('./fs.js'))//E:\desktop\start\node\nodejscn-learn\02\fs.js

console.log(normalize('E:\\desktop\\start\\..\\fs.js'))//E:\desktop\fs.js

