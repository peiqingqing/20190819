let fs = require('fs')

// fs.mkdirSync('./less')
// fs.mkdir('./less', err => {
//   if (err) {
//     console.log(err);
//     return
//   }
//   console.log('ok')
// })
// console.log(1)

/**
 * 结果 1 OK
 * 可以看出来是异步操作
 *  */

//  fs.readdir('./', (err, result) => {
//    if (err) {
//      console.log(err)
//      return
//    }
//    console.log(result);// 返回的结果是一个数组
//  })

// fs.rmdir('./less', err => { // 删除文件夹，必须保证文件夹是空的
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('ok')
// })
// let result = fs.readFileSync('./less/1.less', 'utf8')
// fs.readFile('./less/1.less', 'utf8',(err, result)=> {
//   // 不设置utf8编码格式，读取出来的是buffer格式的数据，设置后读取的是字符串格式的数据
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(result)
// })
// fs.appendFile('./less/1.less', 'body{font-size: 20px}', 'utf8', (err) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('ok')
// })

// fs.copyFile('./package.json', './less/package.json', err =>{
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('ok')
// })

// 合并并压缩css
fs.mkdir('./utils', err=>{
  console.log(err)
})