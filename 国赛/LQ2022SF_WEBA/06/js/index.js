$(function () {
  // 使用 ajax 获取 userList.json 数据并渲染到页面
  let table_body = document.querySelector("tbody");
  let leftSelect = document.querySelector("#leftSelect");
  let rightSelect = document.querySelector("#rightSelect");
  let options = document.querySelectorAll("option");
  let res = [];
  getData().then((data) => {
    // 获取到了数据
    res = data;
    changeData(data);
  });

  function changeData(res) {
    for (let i = 0; i < res.length; i++) {
      var tr = document.createElement("tr");
      tr.className = "newTr"
      var td1 = document.createElement("td");
      td1.innerText = res[i].name;
      var td2 = document.createElement("td");
      if (res[i].right) {
        td2.innerText = "管理员"
      } else {
        td2.innerText = "普通用户"
      }
      tr.appendChild(td1);
      tr.appendChild(td2);
      table_body.appendChild(tr)
    }
  }
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", toRight)

    function toRight() {
      console.log(this);
    }
  }
  // 为按钮添加事件
  $("#add").click(function () {
    // TODO：补充代码，实现功能
    let toRightList = [];
    console.log(leftSelect);
  });
  $("#addAll").click(function () {
    // TODO：补充代码，实现功能
    for (let i = 0; i < options.length; i++) {
      leftSelect.removeChild(options[i])
      rightSelect.appendChild(options[i])
    }
    let newTrs = table_body.querySelectorAll(".newTr");
    for (let i = 0; i < newTrs.length; i++) {
      res[i].right = true;
      table_body.removeChild(newTrs[i])
    }
    changeData(res);
  });
  $("#remove").click(function () {
    // TODO：补充代码，实现功能
  });
  $("#removeAll").click(function () {
    // TODO：补充代码，实现功能
    for (let i = 0; i < options.length; i++) {
      rightSelect.removeChild(options[i])
      leftSelect.appendChild(options[i])
    }
    let newTrs = table_body.querySelectorAll(".newTr");
    for (let i = 0; i < newTrs.length; i++) {
      res[i].right = false;
      table_body.removeChild(newTrs[i])
    }
    changeData(res);
  });
});

/**
 * 修改权限
 * @param {Object} right 要修改的权限
 * @param {Object} changeList 要修改权限的用户列表
 */
function changeAccess(right, changeList) {
  // TODO：补充代码，实现功能
}
// 异步获取数据
function getData() {
  // TODO：补充代码，实现功能
  return new Promise((resolve, reject) => {
    try {
      $.ajax({
        methods: "GET",
        url: "../js/userList.json",
        success: (res) => {
          console.log(res);
          resolve(res)
        }
      });
    } catch (err) {
      reject(err)
    }
  })
}