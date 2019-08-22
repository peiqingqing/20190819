let serve = http.createServer(); // => 创建一个服务
serve.listen() // => 监听一个窗口
// 注意： 基于node创建后台程序，我们一般都创建一个server模块，
//       在模块中实现创建wEB服务，和对于请求的处理
//       （并且我们一般都会把server模块放到当前项目的根目录下）