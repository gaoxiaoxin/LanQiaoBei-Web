// TODO：请补充代码
function startGame() {
  $("img").show(500);
  $("#start").hide();
  $("img").hide(500);
  let i = 0;
  let clickImg = [];
  let score = $("#score");
  [...$(".img-box")].forEach((item) => {
    let jqDom = $(item);
    jqDom.click(() => {
      i++;
      if (i <= 2) {
        jqDom.children("img").show();
        clickImg.push(jqDom);
        if (i == 2) {
          click1 = clickImg[0].children("img").attr("alt");
          click2 = clickImg[1].children("img").attr("alt");
          if (click1 == click2) {
            clickImg.forEach((item) => {
              item.css({
                visibility: "hidden",
              });
            });
            score.text(Number(score.text()) + 2);
          } else {
            setTimeout(() => {
              clickImg.forEach((item) => {
                item.children("img").hide(500);
              });
              score.text(Number(score.text()) - 2);
            }, 500);
          }
          setTimeout(() => {
            i = 0;
            clickImg = [];
          }, 500);
        }
      }
    });
  });
}
