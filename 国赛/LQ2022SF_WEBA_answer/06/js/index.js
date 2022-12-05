$(function () {
  // 使用 ajax 获取 userList.json 数据并渲染到页面
  getData();
  // 为按钮添加事件
  $("#add").click(function () {
    let array = [];
    let changeList = [];
    // TODO：补充代码，实现功能
    [...$("#leftSelect option:selected")].forEach((item) => {
      item.selected = false;
      array.push(item);
    });
    array.forEach((item) => {
      changeList.push(item.value);
    });
    $("#rightSelect").append(array);
    changeAccess(true, changeList);
  });
  $("#addAll").click(function () {
    // TODO：补充代码，实现功能
    let array = [];
    let changeList = [];
    array = $("#leftSelect option");
    $("#rightSelect").append(array);
    [...array].forEach((item) => {
      changeList.push(item.value);
    });
    changeAccess(true, changeList);
  });
  $("#remove").click(function () {
    // TODO：补充代码，实现功能
    let array = [];
    let changeList = [];
    [...$("#rightSelect option:selected")].forEach((item) => {
      item.selected = false;
      array.push(item);
    });
    array.forEach((item) => {
      changeList.push(item.value);
    });
    $("#leftSelect").append(array);
    changeAccess(false, changeList);
  });
  $("#removeAll").click(function () {
    // TODO：补充代码，实现功能
    let array = [];
    let changeList = [];
    array = $("#rightSelect option");
    $("#leftSelect").append(array);
    [...array].forEach((item) => {
      changeList.push(item.value);
    });
    changeAccess(false, changeList);
  });
});

/**
 * 修改权限
 * @param {Object} right 要修改的权限
 * @param {Object} changeList 要修改权限的用户列表
 */
function changeAccess(right, changeList) {
  // TODO：补充代码，实现功能
  changeList.forEach((item) => {
    if (right) {
      $(`#userList tr[value='${item}']`).children("td")[1].innerHTML = "管理员";
    } else {
      $(`#userList tr[value='${item}']`).children("td")[1].innerHTML =
        "普通用户";
    }
  });
}
// 异步获取数据
function getData() {
  // TODO：补充代码，实现功能
  $.ajax({
    type: "get",
    url: "/国赛/LQ2022SF_WEBA/06/js/userList.json",
    success: function (response) {
      table(response);
    },
  });
  function table(tableData) {
    tableData.forEach((item) => {
      $("#userList").append(`
      <tr value="${item.name}">
        <td>${item.name}</td>
        <td>${item.right ? "管理员" : "普通用户"}</td>
      </tr>
      `);
    });
  }
}
