let pageNum = 1; // 当前页码，默认页码1
let maxPage; // 最大页数
// TODO：待补充代码
let ListData = []
let carlist = []
async function addData() {
  const { data: res } = await axios.get('js/carlist.json')
  ListData = res
  maxPage = Math.floor(ListData.length / 5) + 1
  carlist = ListData.slice((pageNum - 1) * 5, pageNum * 5)
  addNode(carlist)
}
// 添加元素
function addNode(array = carlist) {
  let list = document.querySelector('#list');
  list.innerHTML = ''
  for (let i = 0; i < array.length; i++) {
    let node = document.createElement('div')
    node.setAttribute('class', 'list-group')
    node.innerHTML = `
      <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${array[i].name}</h5>
            <small>${array[i].price}元</small>
          </div>
          <p class="mb-1">
            ${array[i].description}
          </p>
        </a>
    `
    list.append(node)
  }
  document.querySelector('#pagination').innerHTML = `当前页码: ${pageNum}, 总页码:${maxPage}`
}
// 点击上一页
let prev = document.getElementById("prev");
prev.onclick = function () {
  // TODO：待补充代码
  if (pageNum == 1) {
    return;
  } else {
    pageNum--;
    carlist = ListData.slice((pageNum - 1) * 5, pageNum * 5)
    addNode()
    next.setAttribute('class', 'page-item')
    if (pageNum == 1) {
      prev.setAttribute('class', 'page-item disabled')
    }
  }
};
// 点击下一页
let next = document.getElementById("next");
next.onclick = function () {
  // TODO：待补充代码
  if (pageNum === maxPage) {
    return;
  } else {
    pageNum++;
    carlist = ListData.slice((pageNum - 1) * 5, pageNum * 5)
    prev.setAttribute('class', 'page-item')
    addNode()
    if (pageNum === maxPage) {
      next.setAttribute('class', 'page-item disabled')
    }
  }
};

addData()

