let url = require('url')
let result = url.parse('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=node%20api&rsv_pq=d36437b100209aa9&rsv_t=65c1KHYd2cKLeNWxKT7hONEFbTHUeT00qyira%2FaJ3akWFTOvnJ8LtrXDGoQ&rqlang=cn&rsv_enter=1&rsv_dl=ib&rsv_sug3=9&rsv_sug1=9&rsv_sug7=101', true)
console.log(result)
// url.parse(url, false) // 第二个参数默认是false， 为true的话
// 区别就是query, 常用的方法是加了true
/** 
 * 
 *  protocol: 'https:', // 协议
  slashes: true, //是否有双斜线
  auth: null, //  作者
  host: 'www.baidu.com', // 域名+ 端口
  port: null, // 端口
  hostname: 'www.baidu.com', // 域名
  hash: null, // 哈希
  search:
   '?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=node%20api&rsv_pq=d36437b100209aa9&rsv_t=65c1KHYd2cKLeN
WxKT7hONEFbTHUeT00qyira%2FaJ3akWFTOvnJ8LtrXDGoQ&rqlang=cn&rsv_enter=1&rsv_dl=ib&rsv_sug3=9&rsv_sug1=9&rs
v_sug7=101',
  query:
   'ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=node%20api&rsv_pq=d36437b100209aa9&rsv_t=65c1KHYd2cKLeNW
xKT7hONEFbTHUeT00qyira%2FaJ3akWFTOvnJ8LtrXDGoQ&rqlang=cn&rsv_enter=1&rsv_dl=ib&rsv_sug3=9&rsv_sug1=9&rsv
_sug7=101',
 pathname: '/s', //请求资源路径的名称
*/