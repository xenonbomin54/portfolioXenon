const container = document.getElementById('cardBox');

let divBox = `
        <div class="divs" style="background-color:white; width: calc(200px + 15vw + 4vh); height: calc(150px + 15vw + 4vh); max-width: 90%; margin:0 auto; margin-top:10vh;">
            hello!
        </div>
    `;
    container.insertAdjacentHTML('beforeend', divBox);