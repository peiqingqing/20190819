let {readFile} = require('./utils/fsPromise')

readFile('./less/2.css').then(res => {
  console.log(res)
})