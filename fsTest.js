let {readfile, readdir, wirteFile} = require('./utils/fsPromise')

// 合并并且压缩css

// 1、把所有的css文件读取出来
readdir('less').then(result => {
  return result.filter(item =>{
    /\.css$/i.test(item)
  })
}).then(result => {
  let arg = []
  result.forEach(item => {
    arg.push(readfile(`less/${item}`))
    // 分别调取readfile方法，读取捕捉到的css文件，向数组中添加各个文件的promise实力
  })
  // arg = [promise1, promise2,....]
  // Promise.all: 等待数组中所有的promise实例执行成功才算成功
  return Promise.all(arg)
}).then(result => {
  // result: 一个数组，存放所有文件读取的内容
  result = result.join('')
  return result.replace(/( |\n|\r)/g, '')
}).then(result => {
  return wirteFile('less/build.min.css', result)
}).then(() => {
  console.log('创建成功')
})