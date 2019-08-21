function sum (...arg) {
  // let result = 0;
  // arg.forEach((item) => {
  //   isNaN(item) ? (result = 0) : (result+=item)
  // })

  return eval(arg.join('+'))
}

module.exports = {
  sum
}