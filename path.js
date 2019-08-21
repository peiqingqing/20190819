let path = require('path')
console.log(path.resolve()) ;///Users/peiqingqing/Documents/我的资料/github/newGit20190819
// console.log(__dirname);// /Users/peiqingqing/Documents/我的资料/github/newGit20190819

/** 
 * path.resolve(): 返回当前模块的绝对地址（不包含模块名称）
 * __dirname: 当前模块所在的绝对路径（和模块中的方法在哪执行是没有关系的）
 *            是以创建模块所在路径为主
 * path.resolve(): 当前模块中的方法在哪个模块中执行的，那么对应的绝对路径是执行模块的绝对路径
 *                  是以执行模块所在路径为主
*/

console.log(path.resolve(__dirname, './less/1.less'))
// 可以把一个相对路径拼接在绝对路径的下面（
//保证第一是绝对的，第二个是相对的，如果2个都是绝对的，以最后一个为主）