let admin = document.getElementById("admin");

let authList;
let url = location.href;

// 获取最终要渲染的菜单列表
let res = getMenuListAndAuth(menuList);

function getUrlParam(key) {
  let args = {};
  const arr = url.match(/\w+=\w+/gi).map((kv) => kv.split("="));
  for (let item of arr) {
    args[item[0]] = item[1];
  }
  return args[key];
}

let role = getUrlParam("name");

if (role == "admin") {
  // 管理员
  authList = ["profile", "comments", "product", "productList", "category"];
  admin.innerHTML = `你好，管理员`;
} else {
  // 超级管理员
  authList = [
    "profile",
    "comments",
    "product",
    "productList",
    "category",
    "addClassification",
    "admin",
    "product",
    "admin-auth",
  ];
  admin.innerHTML = `你好，超级管理员`;
}
// 全部的菜单列表
let sidelistall = res.menus;
let sidebarmenu = document.querySelector("#sidebarmenu");

/**
 * @param {*} auth 传入的权限列表
 * @return {*}  根据传入的权限列表返回需要显示的菜单列表
 */
const getNav = (auth) => {
  const filter = (sidelistall) => {
    return sidelistall.filter((item) => {
      if (auth.includes(item.auth)) {
        if (item.children) {
          item.children = filter(item.children);
        }
        return true;
      }
    });
  };
  return filter(sidelistall);
};
renderSide();

// 根据权限渲染左侧菜单
function renderSide() {
  let menuListside = getNav(authList);
  const rendermenu = (children) => {
    let childrenhtml = "";
    childrenhtml += children
      .map((child) => {
        let childrenH2 = "";
        if (child.children && !!child.children.length) {
          childrenH2 = rendermenu(child.children);
        }
        return `<ul >
                <li style="line-height: 28px;">${child.name} 
                ${childrenH2 ? `<i> ${childrenH2}</i>` : ""}
			 </ul>`;
      })
      .join("");
    return childrenhtml;
  };

  // 渲染菜单
  menuListside.map((item, index) => {
    let childrenhtml = "";
    // 首先判断 item 有没有子级
    if (item.children && !!item.children.length) {
      childrenhtml = rendermenu(item.children);
    }
    sidebarmenu.innerHTML += `
               <li class="active">
                       <a>
                            ${item.name}
                        </a>
                       <i style="color:#27C24C">${
                         childrenhtml ? childrenhtml : ""
                       }</i> 
                 </li>`;
  });
}
