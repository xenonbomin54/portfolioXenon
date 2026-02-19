const container = document.getElementById('cardBox');
const boxWidth = "(200px + 15vw + 4vh)";

let i = 0;
let gaesoo = 3;

for (i=0;i<gaesoo;i++){
    switch(i) {
        case 0:
            var boxValue = "memoUSB";
            var boxValue2 = "Usb style memo program";
            var boxImg = "img1.png";
            var xPos = `calc((100vw - 3 * ${boxWidth}) / 4)`;
            if(!isMobile()){
                var distortion = "rotateY(20deg)";
            }else {
                var distortion = "rotateX(20deg)";
            }
            break;
        case 1:
            var boxValue = "SQUARE";
            var boxValue2 = "Innovative community";
            var boxImg = "img2.png";
            var xPos = `calc(((100vw - 3 * ${boxWidth}) / 4) * 2 + ${boxWidth})`;
            var distortion = "skew(0deg, 0deg)";
            break;
        case 2:
            var boxValue = "portfolio page";
            var boxValue2 = "xenonbomin54's portfolio page";
            var boxImg = "img3.png";
            var xPos = `calc(((100vw - 3 * ${boxWidth}) / 4) * 3 + ${boxWidth} * 2)`;
            if(!isMobile()){
                var distortion = "rotateY(-20deg)";
            }else {
                var distortion = "rotateX(-20deg)";
            }
            break;
    }
    let divBox = `
        <div class = "divs" style="left: ${xPos};transform: perspective(1000px) ${distortion};">
            <div class="bv">${boxValue}</div>
            <div class="bv2">${boxValue2}</div>
            <img src="${boxImg}" class="imgs">
        </div>
    `;
    container.insertAdjacentHTML('beforeend', divBox);
}

let cardChangeVar = 0;

window.addEventListener('keydown', (e) => {
    if (e.key === "ArrowLeft") {
        cardChangeVar += 1;
        if(cardChangeVar >= gaesoo) {
            cardChangeVar -= gaesoo;
        }
        cardChangeFunc();
    } else if (e.key === "ArrowRight") {
        cardChangeVar -= 1;
        if(cardChangeVar < 0) {
            cardChangeVar += gaesoo;
        }
        cardChangeFunc();
    }
});

function cardChangeFunc(){
    if(isMobile()){
        console.log("mobile");
    }
    console.log(cardChangeVar);
}

function isMobile() {
    return window.innerWidth < 768;
}

