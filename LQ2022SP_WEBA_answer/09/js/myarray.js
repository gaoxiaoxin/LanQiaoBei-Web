// 返回条件为真的新数组
Array.prototype.myarray = function (cb) {
  // TODO：待补充代码
  let innerArray = []
  if (typeof cb !== 'function') {
    return;
  }
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      innerArray.push(this[i])
    }
  }
  return innerArray;
};
