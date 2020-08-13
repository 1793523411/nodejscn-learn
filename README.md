# 学习 nodejs

## 简单介绍

### nodejs 简介

- nodejs 简介和优势
- nodejs 的 hello word
- nodejs 框架和工具

Node.js 应用程序运行于单个进程中，无需为每个请求创建新的线程。 Node.js 在其标准库中提供了一组异步的 I/O 原生功能（用以防止 JavaScript 代码被阻塞），并且 Node.js 中的库通常是使用非阻塞的范式编写的（从而使阻塞行为成为例外而不是规范）

在 Node.js 中，可以毫无问题地使用新的 ECMAScript 标准，因为不必等待所有用户更新其浏览器，你可以通过更改 Node.js 版本来决定要使用的 ECMAScript 版本，并且还可以通过运行带有标志的 Node.js 来启用特定的实验中的特性。

### nodejs 历史

javascript 服务端的过去，以及 nodejs 的历史

### 安装 nojs

略...

### nodejs 与 javascript

javascript: 词汇结构,表达式,数据类型,变量,函数,this,箭头函数,循环,作用域,数组,模板字面量,分号,严格模式,ECMAScript 6、2016、2017
nodejs: 异步编程与回调,定时器,Promise,Async 与 Await,闭包,事件循环

### nodejs 与浏览器的区别

- nodejs 轻松统一前后端，具备极大优势
- 生态系统
- 浏览器特有 dom，window 对象，nodejs 特有操作文件系统
- nodejs 可控制运行环境，而浏览器无法控制访客使用的浏览器
- javascript 发展很快，而浏览器发展很慢
- 新的语法保准需要由 babel 转换成 es5 兼容才能在浏览器运行，而在 nodejs 中不需要这么做
- 语法标准： Node.js 使用 CommonJS 模块系统，而在浏览器中，则还正在实现 ES 模块标准
- 这意味着在 Node.js 中使用 require()，而在浏览器中则使用 import

## 开始入门 nodejs

### v8 javascript 引擎

- v8 独立于浏览器
- 随着 Node.js 的爆炸性发展，V8 成为了现在为大量的服务器端代码（使用 JavaScript 编写）提供支持的引擎
- Node.js 的生态系统非常庞大，得益于此，V8 还为桌面应用程序（通过 Electron 等项目）提供支持
- v8 使用 c++编写
- 关于编译：javascript 通常被认为是解释性语言，但现代 javascript 引擎不再只是解释 javascript，也会对其进行编译，JavaScript 是由 V8 在其内部编译的，使用了即时（JIT）编译以加快执行速度。
- 在这个新世界中，编译 JavaScript 非常有意义，一旦完成，则会比纯解释型的代码具有更高的性能。

## 如何终止 nodejs 程序

- ctrl+c
- 使用 process 从程序内部停止
- SIGKILL 是告诉进程要立即终止的信号，理想情况下，其行为类似于 process.exit()。
- SIGTERM 是告诉进程要正常终止的信号。它是从进程管理者（如 upstart 或 supervisord）等发出的信号。
- 需要知道运行进程的 pid

## 读取环境变量

`process.env.NODE_ENV`

- 环境变量默认是开发环境
- process 不需要 require，这是一个内置模块

### 使用 REPL(repl)

- table 自动补全：例如 Number，添加一个点号并按下 tab

```shell
> Number.
Number.__defineGetter__      Number.__defineSetter__      Number.__lookupGetter__      Number.__lookupSetter__
Number.__proto__             Number.hasOwnProperty        Number.isPrototypeOf         Number.propertyIsEnumerable
Number.toLocaleString        Number.valueOf

Number.apply                 Number.arguments             Number.bind                  Number.call
Number.caller                Number.constructor           Number.toString

Number.EPSILON               Number.MAX_SAFE_INTEGER      Number.MAX_VALUE             Number.MIN_SAFE_INTEGER
Number.MIN_VALUE             Number.NEGATIVE_INFINITY     Number.NaN                   Number.POSITIVE_INFINITY
Number.isFinite              Number.isInteger             Number.isNaN                 Number.isSafeInteger
Number.length                Number.name                  Number.parseFloat            Number.parseInt
Number.prototype
```

- 如果在某些代码之后输入 \_，则会打印最后一次操作的结果。
- 点命令,.help 查看

## 从命令行接收参数

- process.argv 获取的是一个数组，自定义参数从下表为 2 开始
- 使用 minimist 解析参数，记得加--

## 控制台输出

- console.log
- console.log 格式化输出
- console.clear()
- console.count()
- 打印错误堆栈，console.trace()
- 计算耗时，console.time()和，console.timeEnd(),括号内的还得相同
- stdout 和 stderr，console.log 非常适合在控制台中打印消息。 这就是所谓的标准输出（或称为 stdout），console.error 会打印到 stderr 流，它不会出现在控制台中，但是会出现在错误日志中
- 为输出着色，只有 node 本身调用的是底层来着色，需要各种转义，也可以调用第三方库：chalk
- 创建进度条，调用第三方库：progress

## 从命令行接受输入

- 使用内置模块，readline
- 使用第三方：inquirer 或 readline-sync

## 模块导入

- 两种方式：module.exports 和 exports
- 两者的区别：前者公开了它指向的对象。 后者公开了它指向的对象的属性。

## npm 包管理器

- 更新软件包：npm updata 更新所有买也可以加上名字更新单个
- 可以版本控制
- 可以运行任务，配置在 script 中，比如运行 webpack，运行测试
- npm 安装到了那？分本地和全局，全局在哪？
  - 使用 npm root -g 查看确切位置
  - 使用 nvm 可以版本 node 管理
- 关于 nom 安装的可执行文件，比如 cowsay 哈哈哈
- 可以使用 npx 直接运行这些

```shell
< Hi~~~ >
 -------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## package.json 文件

- 略····
- 注意 name 的命名要求：名称必须少于 214 个字符，且不能包含空格，**只能包含小写字母**、连字符（-）或下划线（\_）
- bugs：链接到软件包的问题跟踪器，最常用的是 GitHub 的 issues 页面
- homepage：设置软件包的主页
- 版本：第一个数字是主版本号，第二个数字是次版本号，第三个数字是补丁版本号
- repository：注意 github 前缀,其他流行的服务商还包括：`"repository": "gitlab:nodejscn/node-api-cn"`
- main:设置包的入口点
- private：如果设置为 true，则可以防止应用程序/软件包被意外发布到 npm 上
- 命令特有的属性
  - package.json 文件还可以承载命令特有的配置，例如 Babel、ESLint 等
  - 每个都有特有的属性，例如 eslintConfig、babel 等。 每个都有特有的属性，例如 eslintConfig、babel 等，它们是命令特有的，可以在相应的命令/项目文档中找到如何使用它们
- 软件包版本
  - 鉴于使用了 semver（语义版本控制），所有的版本都有 3 个数字，第一个是主版本，第二个是次版本，第三个是补丁版本，具有以下规则

```
    ~: 如果写入的是 〜0.13.0，则只更新补丁版本：即 0.13.1 可以，但 0.14.0 不可以。
    ^: 如果写入的是 ^0.13.0，则要更新补丁版本和次版本：即 0.13.1、0.14.0、依此类推。
    *: 如果写入的是 *，则表示接受所有的更新，包括主版本升级。
    >: 接受高于指定版本的任何版本。
    >=: 接受等于或高于指定版本的任何版本。
    <=: 接受等于或低于指定版本的任何版本。
    <: 接受低于指定版本的任何版本。
    =: 接受确切的版本
    -: 接受一定范围的版本。例如：2.1.0 - 2.6.2
    ||: 组合集合。例如 < 2.1 || > 2.6

    无符号: 仅接受指定的特定版本。
    latest: 使用可用的最新版本。
    还可以在范围内组合以上大部分内容，例如：1.0.0 || >=1.1.0 <1.2.0，即使用 1.0.0 或从 1.1.0 开始但低于 1.2.0 的版本
```

## package-lock.json

- 该文件旨在跟踪被安装的每个软件包的确切版本，以便产品可以以相同的方式被 100％ 复制（即使软件包的维护者更新了软件包）
- npm update 可更新该文件中的依赖，如果有新的次版本或补丁版本（更新的规则是 ^1.3.1），并且输入了 npm update，则已安装的版本会被更新，并且 package-lock.json 文件会被新版本填充，package.json 则保持不变。
- package-lock.json 会固化当前安装的每个软件包的版本，当运行 npm install 时，npm 会使用这些确切的版本

## npm 包

- 查看安装版本： npm list ，也可以指定具包名
- npm view [package_name] version 可以查看软件包在 npm 仓库上最新的可用版本
- npm install <package>@<version> 指定具体版本
- npm view [package_name] versions 可查看所有以前版本
- npm update 可更新该文件中的依赖，如果有新的次版本或补丁版本（更新的规则是 ^1.3.1），并且输入了 npm update，则已安装的版本会被更新，并且 package-lock.json 文件会被新版本填充，package.json 则保持不变。
- 若要发觉软件包的新版本，则运行 npm outdated
- 更新中有些是主版本。 运行 npm update 不会更新那些版本。 主版本永远不会被这种方式更新，因为它们（根据定义）会引入重大的更改，npm 希望为你减少麻烦。
- 若要将所有软件包更新到新的主版本，则全局地安装 npm-check-updates 软件包,然后运行 ncu -u ，这会升级 package.json 文件的 dependencies 和 devDependencies 中的所有版本，以便 npm 可以安装新的主版本，然后可使用 npm update 继续更新，（在进行安装）
- 卸载包：如果使用 -S 或 --save 标志，则此操作还会移除 package.json 文件中的引用，如果程序包是开发依赖项（列出在 package.json 文件的 devDependencies 中），则必须使用 -D 或 --save-dev 标志从文件中移除
- 在代码中，应该只引入本地的软件包
- 当程序包提供了可从 shell（CLI）运行的可执行命令、且可在项目间复用时，则该程序包应被全局安装。也可以在本地安装可执行命令并使用 npx 运行，但是某些软件包最好在全局安装
- npm list -g --depth 0，查看在系统上安装的一些全局软件包
- 当投入生产环境时，如果输入 npm install 且该文件夹包含 package.json 文件时，则会安装它们，因为 npm 会假定这是开发部署,需要设置 --production 标志（npm install --production），以避免安装这些开发依赖项。

## npx

- npx,哈哈哈，很方便运行本地的命令，还方便运行不同版本的命令，还可作为独立的包管理器、
- 运行 npx commandname 会自动地在项目的 node_modules 文件夹中找到命令的正确引用，而无需知道确切的路径，也不需要在全局和用户路径中安装软件包
- npx 另一个重要特性，无需安装命令，可运行命令，比如下面这个，没全局安装，也可以使用 npx 执行，但 npm 不行
- 使用 @ 指定版本，并将其与 node npm 软件包 结合使，有助于避免使用 nvm 之类的工具或其他 Node.js 版本管理工具
- 还可以直接从 URL 运行任意代码片段，当然，当运行不受控制的代码时，需要格外小心，因为强大的功能带来了巨大的责任

```shell
npx node@10 -v #v10.18.1
npx node@12 -v #v12.14.1
npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32
```

```shell
 ____________
< I Love You >
 ------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## 事件循环

> Node.js 单线程类似进入一个 while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数

- 关键词：事件循环，做到异步且具有非阻塞的 I/O，单线程，阻塞事件循环，回调（最近越来越多于 promise 和 async/await），调用堆栈，函数入队，消息队列，es6 作业队列，
- 事件循环会赋予调用堆栈优先级，它首先处理在调用堆栈中找到的所有东西，一旦其中**没有任何东西**，便开始处理消息队列中的东西，我们不必等待诸如 setTimeout、fetch、或其他的函数来完成它们自身的工作，因为它们是由浏览器提供的，并且位于它们自身的线程中。 例如，如果将 setTimeout 的超时设置为 2 秒，但不必等待 2 秒，等待发生在其他地方
- 有个游乐园中过山车的比喻很好：消息队列将你排在队列的后面（在所有其他人的后面），你不得不等待你的回合，而工作队列则是快速通道票，这样你就可以在完成上一次乘车后**立即\***乘坐另一趟车，这是 Promise（以及基于 promise 构建的 async/await）与通过 setTimeout() 或其他平台 API 的普通的旧异步函数之间的巨大区别
- process.nextTick()：http://nodejs.cn/learn/understanding-process-nexttick，可意会
- 调用 setTimeout(() => {}, 0) 会在下一个滴答结束时执行该函数，比使用 nextTick()（其会优先执行该调用并在下一个滴答开始之前执行该函数）晚得多
- 当要异步地（但要尽可能快）执行某些代码时，其中一个选择是使用 Node.js 提供的 setImmediate() 函数
- 传给 process.nextTick() 的函数会在事件循环的当前迭代中（当前操作结束之后）被执行。 这意味着它会始终在 setTimeout 和 setImmediate 之前执行。延迟 0 毫秒的 setTimeout() 回调与 setImmediate() 非常相似。 执行顺序取决于各种因素，但是它们都会在事件循环的下一个迭代中运行。

## JavaScript 定时器

- setTimeout 会返回定时器的 id。 通常不使用它，但是可以保存此 id，并在要删除此安排的函数执行时清除它
- 如果将超时延迟指定为 0，则回调函数会被尽快执行（但是是在当前函数执行之后，通过在调度程序中排队函数，可以避免在执行繁重的任务时阻塞 CPU，并在执行繁重的计算时执行其他函数
- 通常在 setInterval 回调函数中调用 clearInterval，以使其自行判断是否应该再次运行或停止
- 递归的 setTimeout：setInterval 每 n 毫秒启动一个函数，而无需考虑函数何时完成执行，如果一个函数总是花费相同的时间，那就没问题了，函数可能需要不同的执行时间，这具体取决于网络条件，也许一个较长时间的执行会与下一次执行重叠，为了避免这种情况，可以在回调函数完成时安排要被调用的递归的 setTimeout
- Node.js 还提供 setImmediate()（相当于使用 setTimeout(() => {}, 0)），通常用于与 Node.js 事件循环配合使用

```js
const myFunction = () => {
  // 做些事情

  setTimeout(myFunction, 1000);
};

setTimeout(myFunction, 1000);
```

## 异步与回调

- 只要记住，程序是异步的且会暂停执行直到需要关注，这使得计算机可以同时执行其他操作。 当程序正在等待来自网络的响应时，则它无法在请求完成之前停止处理器
- ····
- async/aw3ait

## nodejs 发 http

- get post
- 接受请求当接收 post 使用 express 很容易，如果不用，接受的是一个流对象,然后在数据结束时 end，一次调用流事件

```js
const server = http.createServer((req, res) => {
  let data = [];
  req.on("data", (chunk) => {
    data.push(chunk);
  });
  req.on("end", () => {
    JSON.parse(data).todo; // 'Buy the milk'
  });
});
```

## 文件

- 在与位于文件系统中的文件进行交互之前，您必须获取文件描述符。**文件描述符**是使用模块 open()提供的方法通过打开文件返回的内容 fs：
- r+ 打开文件进行读写
- w+打开文件以进行读写，将流放在文件的开头。如果不存在则创建文件
- a 打开要写入的文件，将流放在文件末尾。如果不存在则创建文件
- a+打开文件进行读写，将流放在文件末尾。如果不存在则创建文件
- 使用 fs.openSync 方法打开文件，该方法返回文件描述符，而不是在回调中提供他，一旦获取文件描述符就可以以任何选择的方式执行它所需要的操作，例如调用 fs.open()以及与文件系统交互的许多其他操作。
- fs 的 status 获取**文件属性**，Node.js 还提供了一个 sync(statSync)方法，该方法将阻塞线程(同步)，直到文件状态准备就绪为止
- **文件路径**，使用 path 模块,获取文件路径，文件名，后缀名，拼接路径
- 读取文件 fs.readFile()方法,可以使用同步版本 fs.readFileSync()，大文件将对内存消耗和程序执行速度产生重大影响。在这种情况下，更好的选择是使用流读取文
- 写入文件 writeFile 和 writeFileSync ,注意文件标志，附加到文件 appendFile，使用流
- 使用文件夹：使用 fs.access()检查文件夹是否存在，如果该文件夹存在和 Node.js 的可以用它的权限访问它；使用 fs.mkdir()或 fs.mkdirSync()创建一个新文件夹；使用 fs.readdir()或 fs.readdirSync()读取目录的内容；使用 fs.rename()或 fs.renameSync()重命名文件夹。第一个参数是当前路径，第二个参数是新路径，fs.renameSync() 是同步版本；使用 fs.rmdir()或 fs.rmdirSync()删除文件夹；
- Node.js 文件系统模块,该 fs 模块提供了许多非常有用的功能来访问文件系统并与文件系统进行交互,关于 fs 模块的一件奇特的事情是，默认情况下所有方法都是异步的，但是通过追加 Sync 可以同步工作。
- 路径模块：该 path 模块提供了许多非常有用的功能来访问文件系统并与文件系统进行交互，path.basename()返回路径的最后一部分。第二个参数可以过滤掉文件扩展名；path.dirname()返回路径的目录部分；path.extname()返回路径的扩展名；path.isAbsolute()如果是绝对路径，则返回 true；path.join()连接路径的两个或多个部分；path.normalize()尝试在包含相对说明符（例如.或..）或双斜杠时计算实际路径；path.parse()用组成它的段分析对象的路径,{root： 根,dir：从根开始的文件夹路径,base：文件名+扩展名,name：文件名,ext：文件扩展名},path.relative()接受2个路径作为参数。根据当前工作目录，返回从第一个路径到第二个路径的相对路径;path.resolve()可以使用来获得相对路径的绝对路径,通过指定第二个参数，resolve将第一个用作第二个的基础,如果第一个参数以斜杠开头，则表示它是绝对路径

## 其他

+ 操作系统模块：该模块提供了许多功能，可用于从底层操作系统和程序运行所在的计算机上检索信息并与其进行交互
+ 事件模块：该events模块为我们提供了EventEmitter类，这是在Node.js中处理事件的关键
+ HTTP核心模块是Node.js网络的关键模块，Node.js创建http.Agent该类的全局实例，以管理HTTP客户端（Node.js HTTP网络的关键组成部分）的连接持久性和重用，http.ClientRequest在http.request()或http.get()调用时创建一个对象。收到response响应后，将使用响应作为http.IncomingMessage实例调用该事件http.IncomingMessage实现了Readable Stream接口，因此使用流访问数据，使用创建新服务器时，通常会实例化并返回此类http.createServer()，创建http.Server并作为request触发事件的第二个参数传递
+ Buffer：缓冲区是内存区域。JavaScript开发人员对此概念并不熟悉，比每天与内存交互的C，C ++或Go开发人员（或使用系统编程语言的任何程序员）要少得多，它代表在V8 JavaScript引擎外部分配的固定大小的内存块（无法调整大小），引入了缓冲区以帮助开发人员处理二进制数据，创建缓冲区：Buffer.from()，Buffer.alloc()和Buffer.allocUnsafe()方法
+ 流是支持Node.js应用程序的基本概念之一,它是一种以有效方式处理读/写文件，网络通信或任何类型的端到端信息交换的方式,流不是Node.js特有的概念。它们是几十年前在Unix操作系统中引入的，程序可以相互交互，使流通过管道运算符（|）传递,例如，以传统方式，当您告诉程序读取文件时，会将文件从头到尾读入内存，然后进行处理。使用流，您可以逐段读取它，在不将其全部保存在内存中的情况下处理其内容,Node.js stream模块提供了构建所有流API的基础。所有流都是EventEmitter的实例
+ 开发环境和生产环境的区别：Node.js假定它始终在开发环境中运行。您可以通过设置NODE_ENV=production环境变量来向Node.js发出正在生产中运行的信号。`export NODE_ENV=production`在shell中，但是最好将其放入您的shell配置文件中（例如.bash_profile，使用Bash shell），因为否则，该设置在系统重启的情况下不会保留。您还可以通过将环境变量放在应用程序初始化命令之前来应用它：`NODE_ENV=production node app.js`
+ 错误处理
+ nodejs中如何记录对象