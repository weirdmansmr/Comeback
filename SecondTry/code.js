firstField = document.getElementById('password1')
secondField = document.getElementById('password2')

const characters = 
["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1"
, "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{",
"[","}","]",",","|",":",";","<",">",".","?","/"];

function generate() {
    firstField.innerHTML = ''
    secondField.innerHTML = ''
    for (let i = 0; i < 15; i++) {
        let randSymbOne = Math.floor(Math.random() * characters.length)
        let randSymbTwo = Math.floor(Math.random() * characters.length)
        firstField.innerHTML += characters[randSymbOne]
        secondField.innerHTML += characters[randSymbTwo]
    }
}

document
    .querySelector('#password1')
    .addEventListener('click', async (event) => {
        const code = event.target.innerText;
        await navigator
            .clipboard
            .writeText(code);
        alert(`${code} copied!`);
    })

document
    .querySelector('#password2')
    .addEventListener('click', async (event) => {
        const code = event.target.innerText;
        await navigator
            .clipboard
            .writeText(code);
        alert(`${code} copied!`);
    })