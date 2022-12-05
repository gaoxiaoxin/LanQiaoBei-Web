/**
 * @param {Object} oldArr
 * @param {Object} num
 * */
const splitArray = (oldArr, num) => {
  let array = [...oldArr];
  // TODO：请补充代码实现功能
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let middle;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[i] > array[j]) {
        middle = array[i];
        array[i] = array[j]
        array[j] = middle;
      }
    }
    // newArray.unshift(max);
  }
  let a = [];
  array = array.reverse();
  console.log(array);
  let twoArr = [];
  let leng = array.length;
  for (let i = 0; i < (leng / num); i++) {
    if (array.length > num) {
      for (let j = 0; j < num; j++) {
        twoArr.push(array.shift());
      }
    } else {
      twoArr = [...array];
    }
    newArray.push(twoArr);
    twoArr = [];
  }
  return newArray
};
module.exports = splitArray; // 检测需要，请勿删除