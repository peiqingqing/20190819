let a = require('./a')

function avg (...arg) {
  let avg = 0;
  return a.sum(...arg)/arg.length
}

module.exports = {
  avg
}