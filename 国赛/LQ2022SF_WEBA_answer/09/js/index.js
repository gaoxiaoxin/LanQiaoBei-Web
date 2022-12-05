/*
 * @param {*}  左侧输入框输入的值转化成的 js 数据
 * @return {*} 根据传入的数据生成对应的 js 格式数据
 */
let generateData = (data) => {
  // TODO：待补充代码
  // 要返回的对象数组
  let dataArray = [];
  // 将数组中的第一项和第二项分开保存
  let dataRandomNum = data[0];
  let newData = data[1];
  // 判断当前生成的数据是随机数还是一个固定值
  let randomNum = dataRandomNum.match(/\d+/g);
  let dataNum = 0;
  // 看要重复几次数据
  if (randomNum.length === 1) {
    // 一个固定值
    dataNum = randomNum[0];
  } else {
    // 随机数
    let random = Math.floor(
      Math.random() * (randomNum[1] - randomNum[0] + 1) + (randomNum[0] - 0)
    );
    dataNum = random;
  }
  // 通过传入的数据模板生成数据
  function dataCreate(obj) {
    let newObj = { ...obj };
    Object.keys(newObj).forEach((item) => {
      newObj[item] = dataChange(newData[item]);
    });
    return newObj;
  }
  // 需要一个生成随机数的函数
  // switch 进行切换
  function dataChange(data) {
    if (typeof data === "string") {
      let reg = /\{\{[\d\D]{0,}\}\}/;
      // 判断是否有 {{}}
      if (reg.test(data)) {
        let reg = /\([\d\D]{0,}\)/;
        let insideData = data.split("{{")[1].split("}}")[0];
        if (reg.test(insideData)) {
          return createSpecial(insideData);
        } else {
          return data;
        }
      } else {
        return data;
      }
    } else {
      return data;
    }
  }
  // 特殊数据处理
  function createSpecial(data) {
    /* 
     三种类型 bool() ==> 布尔 , integer() ==> 数字, 3 ==> 其他
    */
    if (/bool/.test(data)) {
      let random = Math.random().toFixed();
      return Boolean(random - 0);
    } else if (/integer/.test(data)) {
      let randomNum = data.match(/\d+/g);
      return Math.floor(
        Math.random() * (randomNum[1] - randomNum[0] + 1) + (randomNum[0] - 0)
      );
    } else {
      return data;
    }
  }
  // 生成随机条数据
  for (let i = 0; i < dataNum; i++) {
    dataArray.push(dataCreate(newData));
  }
  return dataArray;
};

module.exports = { generateData };
