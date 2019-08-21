let fs = require('fs'),
    path = require('path')

let readFile = function (pathname) {
  /** 
   * 一般都会把传递的pathname进行处理： 以当前项目的根目录为依托，
   * 我们只需要传递相对于根目录的相对目录地址，程序自动生成一个绝对目录地址
  */
 pathname = path.resolve(path.resolve(), pathname)
  return new Promise((resolve, reject) => {
    fs.readFile(pathname, 'utf8', (err, result) => {
      if (err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
}
module.exports = {
  readFile
}