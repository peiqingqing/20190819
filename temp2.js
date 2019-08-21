let a = 13,
fn = b => {
  return a/b
}
setTimeout(()=>{
  console.log(1.45)
},1)
let temp1 = require('./temp1'); 
/* 
./ 特意指定是当前目录（.js可以省略）
require导入的时候： 
            首先把temp1.js的内容自上而下的执行，
            把exports对应的对内存导入进来，
            所以接收的结果是一个对象
require是一个同步操作：
            只有把导入的代码执行完成，才可以获取值，然后继续执行本模块下的代码


*/
console.log(temp1.fn(10))