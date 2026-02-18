const container = document.getElementById('cardBox');

let i = 0;
let gaesoo = 3;

for (i=0;i<gaesoo;i++){
    switch(i){
        case 0:
            var boxValue = "memoUSB"
            var boxValue2 = "Usb style memo program"
            break;
        case 1:
            var boxValue = "SQUARE"
            var boxValue2 = "Innovative community"
            break;
        case 2:
            var boxValue = "portfolio page"
            var boxValue2 = "xenonbomin54's portfolio page"
            break;
    }
    let divBox = `
        <div class = "divs">
            <div class="bv">${boxValue}</div>
            <div class="bv2">${boxValue2}</div>
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

