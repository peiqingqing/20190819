let {readFile, wirteFile} = require('./utils/fsPromise')
let {entry, output} = require('./less.config')


module.exports = {
  render() {
    entry.forEach((item, index) => {
      readFile(item).then(result => {
        // => 把less文件读取的内容进行 编译： 编译为css
        lessc.render(result, {compress: true}, (err, result) => {
          if (err) return
          let {css} = result
          wirteFile(output[index], css)
        })
      })
    })
  }
}