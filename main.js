const container = document.getElementById('cardBox');
const boxWidth = "(200px + 15vw + 4vh)";

function isMobile() {
    return window.innerWidth < 768;
}

if(!isMobile()) {
    const boxHeight = "(170px + 15vw + 4vh)";
} else {
    const boxHeight = "(100px + 4vh)";
}
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
        <div class = "divs" style="left: ${xPos};transform: perspective(1000px) ${distortion};" id="div${i}">
            <div class="bv">${boxValue}</div>
            <div class="bv2">${boxValue2}</div>
            <img src="${boxImg}" class="imgs">
        </div>
    `;
    container.insertAdjacentHTML('beforeend', divBox);
}
if(!isMobile()){
                document.getElementById("div0").style.transform = "perspective(1000px) rotateY(20deg)";
                document.getElementById("div0").style.filter = "brightness(50%) blur(2px)";
                document.getElementById("div1").style.transform = "skew(0deg, 0deg)";
                document.getElementById("div1").style.filter = "brightness(100%) blur(0px)";
                document.getElementById("div2").style.transform = "perspective(1000px) rotateY(-20deg)";
                document.getElementById("div2").style.filter = "brightness(50%) blur(2px)";
                document.getElementById("div0").style.left = `calc((100vw - 3 * ${boxWidth}) / 4)`;
                document.getElementById("div1").style.left = `calc(((100vw - 3 * ${boxWidth}) / 4) * 2 + ${boxWidth})`; 
                document.getElementById("div2").style.left = `calc(((100vw - 3 * ${boxWidth}) / 4) * 3 + ${boxWidth} * 2)`;
            } else {
                document.getElementById("div0").style.transform = "perspective(1000px) rotateX(20deg)";
                document.getElementById("div0").style.filter = "brightness(50%) blur(2px)";
                document.getElementById("div1").style.transform = "skew(0deg, 0deg)";
                document.getElementById("indicator2").style.backgroundColor = "rgb(255, 255, 255)";
                document.getElementById("div1").style.filter = "brightness(100%) blur(0px)";
                document.getElementById("div2").style.transform = "perspective(1000px) rotateX(-20deg)";
                document.getElementById("div2").style.filter = "brightness(50%) blur(2px)";
                document.getElementById("div0").style.top = `calc((100vw - 3 * ${boxHeight}) / 4)`;
                document.getElementById("div1").style.top = `calc(((100vw - 3 * ${boxHeight}) / 4) * 2 + ${boxHeight})`; 
                document.getElementById("div2").style.top = `calc(((100vw - 3 * ${boxHeight}) / 4) * 3 + ${boxHeight} * 2)`;
            }

let cardChangeVar = 1;

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
        document.getElementById("indicator1").style.backgroundColor = "rgb(131, 131, 131)";
        document.getElementById("indicator2").style.backgroundColor = "rgb(131, 131, 131)";
        document.getElementById("indicator3").style.backgroundColor = "rgb(131, 131, 131)";
        if(cardChangeVar === 1) {
            if(!isMobile()){
                document.getElementById("div0").style.transform = "perspective(1000px) rotateY(20deg)";
                document.getElementById("div0").style.filter = "brightness(50%) blur(2px)";
                document.getElementById("div1").style.transform = "skew(0deg, 0deg)";
                document.getElementById("indicator2").style.backgroundColor = "rgb(255, 255, 255)";
                document.getElementById("div1").style.filter = "brightness(100%) blur(0px)";
                document.getElementById("div2").style.transform = "perspective(1000px) rotateY(-20deg)";
                document.getElementById("div2").style.filter = "brightness(50%) blur(2px)";
                document.getElementById("div0").style.left = `calc((100vw - 3 * ${boxWidth}) / 4)`;
                document.getElementById("div1").style.left = `calc(((100vw - 3 * ${boxWidth}) / 4) * 2 + ${boxWidth})`; 
                document.getElementById("div2").style.left = `calc(((100vw - 3 * ${boxWidth}) / 4) * 3 + ${boxWidth} * 2)`;
            } else {
                document.getElementById("div0").style.transform = "perspective(1000px) rotateX(20deg)";
                document.getElementById("div0").style.filter = "brightness(50%) blur(2px)";
                document.getElementById("div1").style.transform = "skew(0deg, 0deg)";
                document.getElementById("indicator2").style.backgroundColor = "rgb(255, 255, 255)";
                document.getElementById("div1").style.filter = "brightness(100%) blur(0px)";
                document.getElementById("div2").style.transform = "perspective(1000px) rotateX(-20deg)";
                document.getElementById("div2").style.filter = "brightness(50%) blur(2px)";
                document.getElementById("div0").style.top = `calc((100vw - 3 * ${boxHeight}) / 4)`;
                document.getElementById("div1").style.top = `calc(((100vw - 3 * ${boxHeight}) / 4) * 2 + ${boxHeight})`; 
                document.getElementById("div2").style.top = `calc(((100vw - 3 * ${boxHeight}) / 4) * 3 + ${boxHeight} * 2)`;
            }
        } else if(cardChangeVar === 2) {
            if(!isMobile()){
                document.getElementById("div2").style.transform = "perspective(1000px) rotateY(-40deg)";
                document.getElementById("div2").style.filter = "brightness(50%) blur(5px)";
                document.getElementById("div0").style.transform = "skew(0deg, 0deg)";
                document.getElementById("indicator1").style.backgroundColor = "rgb(255, 255, 255)";
                document.getElementById("div0").style.filter = "brightness(100%) blur(0px)";
                document.getElementById("div1").style.transform = "perspective(1000px) rotateY(-20deg)";
                document.getElementById("div1").style.filter = "brightness(50%) blur(2px)";
                document.getElementById("div2").style.left = `calc(((100vw - 3 * ${boxWidth}) / 4) * 3 + ${boxWidth} * 2.84)`;
                document.getElementById("div0").style.left = `calc(((100vw - 3 * ${boxWidth}) / 4) * 2 + ${boxWidth})`; 
                document.getElementById("div1").style.left = `calc(((100vw - 3 * ${boxWidth}) / 4) * 3 + ${boxWidth} * 2)`;
            } else {
                document.getElementById("div2").style.transform = "perspective(1000px) rotateX(-40deg)";
                document.getElementById("div2").style.filter = "brightness(50%) blur(5px)";
                document.getElementById("div0").style.transform = "skew(0deg, 0deg)";
                document.getElementById("indicator1").style.backgroundColor = "rgb(255, 255, 255)";
                document.getElementById("div0").style.filter = "brightness(100%) blur(0px)";
                document.getElementById("div1").style.transform = "perspective(1000px) rotateX(-20deg)";
                document.getElementById("div1").style.filter = "brightness(50%) blur(2px)";
                document.getElementById("div2").style.top = `calc((100vw - 3 * ${boxHeight}) / 4)`;
                document.getElementById("div0").style.top = `calc(((100vw - 3 * ${boxHeight}) / 4) * 2 + ${boxHeight})`; 
                document.getElementById("div1").style.top = `calc(((100vw - 3 * ${boxHeight}) / 4) * 3 + ${boxHeight} * 2)`;
            }
        } else if(cardChangeVar === 0) {
            if(!isMobile()){
                document.getElementById("div1").style.transform = "perspective(1000px) rotateY(20deg)";
                document.getElementById("div1").style.filter = "brightness(50%) blur(2px)";
                document.getElementById("div2").style.transform = "skew(0deg, 0deg)";
                document.getElementById("indicator3").style.backgroundColor = "rgb(255, 255, 255)";
                document.getElementById("div2").style.filter = "brightness(100%) blur(0px)";
                document.getElementById("div0").style.transform = "perspective(1000px) rotateY(40deg)";
                document.getElementById("div0").style.filter = "brightness(50%) blur(5px)";
                document.getElementById("div1").style.left = `calc((100vw - 3 * ${boxWidth}) / 4)`;
                document.getElementById("div2").style.left = `calc(((100vw - 3 * ${boxWidth}) / 4) * 2 + ${boxWidth})`; 
                document.getElementById("div0").style.left = `calc(((100vw - 3 * ${boxWidth}) / 4) * 2 - ${boxWidth})`;
            } else {
                document.getElementById("div1").style.transform = "perspective(1000px) rotateX(20deg)";
                document.getElementById("div1").style.filter = "brightness(50%) blur(2px)";
                document.getElementById("div2").style.transform = "skew(0deg, 0deg)";
                document.getElementById("indicator3").style.backgroundColor = "rgb(255, 255, 255)";
                document.getElementById("div2").style.filter = "brightness(100%) blur(0px)";
                document.getElementById("div0").style.transform = "perspective(1000px) rotateX(40deg)";
                document.getElementById("div0").style.filter = "brightness(50%) blur(5px)";
                document.getElementById("div1").style.top = `calc((100vw - 3 * ${boxHeight}) / 4)`;
                document.getElementById("div2").style.top = `calc(((100vw - 3 * ${boxHeight}) / 4) * 2 + ${boxHeight})`; 
                document.getElementById("div0").style.top = `calc(((100vw - 3 * ${boxHeight}) / 4) * 3 + ${boxHeight} * 2)`;
            }
        }
    console.log(cardChangeVar);
}

