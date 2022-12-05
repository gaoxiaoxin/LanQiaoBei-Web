// TODO：完善此函数 显示红色颜色的灯
function red() {
  let whiteLight = document.querySelector('#defaultlight');
  let redLight = document.querySelector('#redlight');
  whiteLight.style.display = 'none';
  redLight.style.display = 'inline-block'
  setTimeout(green, 3000)
}

// TODO：完善此函数  显示绿色颜色的灯
function green() {
  let redLight = document.querySelector('#redlight');
  let greenLight = document.querySelector('#greenlight')
  redLight.style.display = 'none';
  greenLight.style.display = 'inline-block'
}

// TODO：完善此函数
function trafficlights() {
  setTimeout(red, 3000);
}

trafficlights();
