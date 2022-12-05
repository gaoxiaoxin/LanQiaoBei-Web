/**
 * @param {Object} copyArr
 * @param {Object} num
 * */
const splitArray = (oldArr, num) => {
  let newArr = [];
  // 这里是发现 splice 方法会修改自身, 如果直接将oldArr 投入运算, 那么在 window 对象上的 oldArr 会直接在第二次运行时变为 []
  let copyArr = [...oldArr];
  // 对数组进行升序排列
  for (let i = 0; i < copyArr.length - 1; i++) {
    for (let j = i; j < copyArr.length; j++) {
      if (copyArr[i] > copyArr[j]) {
        [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]];
      }
    }
  }
  // 首先把多余的出的, 单独划出来
  let spilthNum = copyArr.length % num;
  let spilthArray = [];
  if (spilthNum !== 0) {
    spilthArray = copyArr.splice(copyArr.length - spilthNum, spilthNum);
  }
  while (copyArr.length > 0) {
    newArr.push(copyArr.splice(0, num));
  }
  if (spilthNum !== 0) {
    newArr.push(spilthArray);
  }
  console.log(newArr);
  return newArr;
};
module.exports = splitArray; // 检测需要，请勿删除
