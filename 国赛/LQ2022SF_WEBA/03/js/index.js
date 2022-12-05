// TODO：请补充代码
function startGame() {
    let startBtn = document.querySelector("#start");
    let imgs = document.querySelectorAll("img");
    let boxs = document.querySelectorAll(".img-box");
    let score = document.querySelector("#score");
    let scoreNum = score.innerText - 0;
    let num = 0;
    let fruitNames = [];
    let boxsNum = [];
    startBtn.style.display = "none";
    for (let i = 0; i < imgs.length; i++){
        imgs[i].style.display = "block"
    }
    setTimeout(() => {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.display = "none"
        }
    }, 1000);
    for (let i = 0; i < boxs.length; i++) {
        boxs[i].addEventListener("click", () => {
            imgs[i].style.display = "block"
            num++;
            fruitNames.push(imgs[i].alt);
            boxsNum.push(i);
            if (num == 2) {
                console.log(scoreNum);
                if (fruitNames[0] == fruitNames[1]) {
                    scoreNum += 2;

                } else {
                    scoreNum -= 2;
                }
                console.log(scoreNum);
                num = 0;
                fruitNames = [];
                score.innerText = scoreNum;
                setTimeout(() => {
                    for (let i = 0; i < boxsNum.length; i++) {
                        imgs[boxsNum[i]].style.display = "none"
                        boxs[boxsNum[i]].className = ""
                    }
                }, 500)
            }
        })
    }

}
 