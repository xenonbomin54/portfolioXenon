const container = document.getElementById('cardBox');

let i = 0;
let gaesoo = 2;

for (i=0;i<gaesoo;i++){
    switch(i){
        case 0:
            var boxValue = "memoUSB"
            var boxValue2 = "usb style memo program"
            break;
        case 1:
            var boxValue = "portfolio page"
            var boxValue2 = "xenonbomin54 portfolio page"
            break;
    }
    let divBox = `
        <div class="divs" style="background-color:white; width: calc(200px + 15vw + 4vh); height: calc(150px + 15vw + 4vh); max-width: 90%; margin:0 auto; margin-top:10vh; border-radius: calc( 1vw + 5px); text-align:center;">
            <div id="bv">${boxValue}</div>
            <div id="bv2">${boxValue2}</div>
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
    console.log(cardChangeVar);
}

