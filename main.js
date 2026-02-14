const container = document.getElementById('cardBox');

let i=0;
let gaesoo=2;

for (i=0;i<gaesoo;i++){
    switch(i){
        case 0:
            var boxValue = "memoUSB"
            break;
        case 1:
            var boxValue = "portfolio page"
            break;
    }
    let divBox = `
        <div class="divs" style="background-color:white; width: calc(200px + 15vw + 4vh); height: calc(150px + 15vw + 4vh); max-width: 90%; margin:0 auto; margin-top:10vh; border-radius: calc( 1vw + 5px); text-align:center;">
            <div id="${i}">${boxValue}</div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', divBox);
}
