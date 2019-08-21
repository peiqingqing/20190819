let fs = require('fs'),
    path = require('path')
let dirname = path.resolve()
// mkdir rmdir  readFile writeFile  appendFile
// mkdir rmdir
// fs.mkdir(path, callback)


// let readFile = function (pathname) {
//   /** 
//    * 一般都会把传递的pathname进行处理： 以当前项目的根目录为依托，
//    * 我们只需要传递相对于根目录的相对目录地址，程序自动生成一个绝对目录地址
//   */
//  pathname = path.resolve(path.resolve(), pathname)
//   return new Promise((resolve, reject) => {
//     fs.readFile(pathname, 'utf8', (err, result) => {
//       if (err) {
//         reject(err)
//         return
//       }
//       resolve(result)
//     })
//   })
// }
// module.exports = {
//   readFile
// }
let ary = ['mkdir','rmdir','readdir','readFile','copyFile','unlink']
ary.forEach(item => {
  exports[item] = function(pathname, copyname = '') {
    pathname = path.resolve(dirname, pathname)
    copyname = path.resolve(dirname, copyname)
    return new Promise((resolve, reject) => {
      let arg = [
        (err, result) => {
          if (err) {
            reject(err)
            return
          }
          resolve(result || '')
        }
      ]
      item === 'readFile' ? arg.unshift('utf8') : null
      item === 'copyFile' ? arg.unshift(copyname) : null
      fs[item](pathname, ...arg)
    })
  }
});

// writeFile appendFile
['wirteFile', 'appendFile'].forEach(item => {
  exports[item] = function(pathname, content) {
    pathname = path.resolve(dirname, pathname)
    if (typeof content !== 'string'){
      content = JSON.stringify(content)
    }
    return new Promise((resolve, reject) => {        
      fs[item](pathname, content, 'utf8', (err, result) => {
        if (err) {
          reject(err)
          return
        }
        resolve(result || '')
      }
      )
    })
  }
});