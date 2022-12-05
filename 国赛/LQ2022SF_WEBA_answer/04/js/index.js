// TODO：请补充代码
let formula = document.querySelector("#formula");
let result = document.querySelector("#result");
let formulaCopy = "";
// 搞一个标识, 去标记是否使用了AC, 如果没使用AC, 那么就需要在点击运算符号的时候, 判断是否要把之前的结果进行运算
let flag = 0;
// 为class 为 calc-button 的按钮排列功能
[...document.querySelectorAll(".calc-button")].forEach((item) => {
  item.addEventListener("click", function () {
    switch (this.innerHTML) {
      case "=": {
        result.value = eval(formulaCopy);
        flag++;
        formulaCopy = result.value;
        break;
      }
      case "AC": {
        result.value = "";
        formula.value = "";
        formulaCopy = "";
        flag = 0;
        break;
      }
      case "÷": {
        if (flag > 0) {
          formula.value = formulaCopy;
          flag--;
        }
        formula.value += "÷";
        formulaCopy += "/";
        break;
      }
      case "x": {
        if (flag > 0) {
          formula.value = formulaCopy;
          flag--;
        }
        formula.value += "x";
        formulaCopy += "*";
        break;
      }
      case "√": {
        if (flag > 0) {
          formula.value = formulaCopy;
          flag--;
        }
        result.value = Math.sqrt(eval(formulaCopy));
        break;
      }
      case "+": {
        if (flag > 0) {
          formula.value = formulaCopy;
          flag--;
        }
        formula.value += "+";
        formulaCopy += "+";
        break;
      }
      case "-": {
        if (flag > 0) {
          formula.value = formulaCopy;
          flag--;
        }
        formula.value += "-";
        formulaCopy += "-";
        break;
      }
      default: {
        formula.value += this.innerHTML;
        formulaCopy += this.innerHTML;
      }
    }
  });
});
