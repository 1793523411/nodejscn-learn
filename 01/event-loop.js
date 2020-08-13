///函数堆栈，
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  bar()
  baz()
}

foo()
// foo
// bar
// baz


//入队函数执行，消息队列
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  baz()
}

foo()
// foo
// baz
// bar

//es6作业队列，Promise 使用了该队列，这种方式会尽快地执行异步函数的结果，而不是放在调用堆栈的末尾
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('应该在 baz 之后、bar 之前')
  ).then(resolve => console.log(resolve))
  baz()
}

foo()
// foo
// baz
// 应该在 baz 之后、bar 之前
// bar