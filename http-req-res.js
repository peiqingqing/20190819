let http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');

// => 创建web服务
let handle = function handle (req, res) {
  // req: request: 请求对象，包含了客户端请求的信息
  // req.url: 存储的是请求资源的路径地址已经问号传参
  // req.method: 客户端请求的方式
  // let {url, method, headers} = req
  // console.log(url)
  // console.log(method,headers['user-agent'])
  // 把请求的url地址中，路径名称&问号传参，分别解析出来
  // let {pathname, query} = url.parse(req.url, true)
  // console.log(pathname)
  // console.log(query)



  // res: response: 响应对象，包含了一些属性和方法，可以让服务器返回给客户端的内容
  // res.write 基于这个方法，服务器可以向客户端返回响应内容
  // res.end 结束响应
  // res.writeHead  重写响应头信息
  
  // res.write('hello dddd')
  // res.end()
  // res.end('hello 11111')
  // => 服务器端返回给客户端的内容一般都是string或者buffer格式的数据
  res.writeHead(200, {
    'content-type': 'text/plain;charset=utf-8;'
  })
  res.end(JSON.stringify({name: '哈哈哈哈'})) // 中文乱码 => 设置请求头
}
let server = http.createServer(handle).listen('8686', () => {
  console.log('成功，，，，')
})
