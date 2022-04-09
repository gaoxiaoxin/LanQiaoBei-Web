let rollTime; // 定义定时器变量用来清除定时器
let time = 0; // 转动次数
let speed = 300; // 转动时间间隔
let times; // 总转动次数

// 开始按钮点击事件后开始抽奖
$("#start").on("click", function () {
  $("#award").text(""); //清空中奖信息
  // times = 1
  times = parseInt(Math.random() * (20 - 30 + 1) + 20, 10); // 定义总转动次数，随机20-30次
  rolling();
});

/* 
1. 获取li1- li8
2. 添加激活类
3. 在激活下一个之前清除之前的样式
4. 8 个 一循环
*/

// TODO:请完善此函数
function rolling() {
  time++; // 转动次数加1
  clearTimeout(rollTime);
  rollTime = setTimeout(() => {
    window.requestAnimationFrame(rolling); // 进行递归动画
  }, speed);
  let lis = [];
  for (let i = 1; i < 9; i++) {
    lis.push(document.querySelector(`.li${i}`));
  }
  for (let i = 0; i < lis.length; i++) {
    lis[i].setAttribute('class', `li${i + 1}`)
  }
  lis[(time - 1) % 8].setAttribute('class', `li${time % 8 === 0 ? 8 : time % 8} active`)
  // time > times 转动停止
  if (time > times) {
    clearInterval(rollTime);
    $('#award').text(`恭喜您抽中了${lis[(time - 1) % 8].innerText}!!!`)
    time = 0;
    // 将获奖信息显示在p标签上
    return;
  }
}