let home_num = document.getElementById('home_num')
let guest_num = document.getElementById('guest_num')
let sohran = document.getElementById('sohran')
let timer_count = document.getElementById('tablet')

let time = 3600
let countHome = 0
let countGuest = 0
function concatHome(plus) {
    countHome += plus
    home_num.textContent = countHome
}
function concatGuest(plus) {
    countGuest += plus
    guest_num.textContent = countGuest
}

function newGame() {
    countHome = 0
    countGuest = 0
    home_num.textContent = 0
    guest_num.textContent = 0
    sohran.innerText = timer_count.textContent
}

function timer() {

    setInterval(countDown, 1000)

    function countDown() {
        const minutes = Math.floor(time / 60)
        let seconds = time % 60
        seconds = seconds < 10 ? "0" + seconds: seconds
        timer_count.innerHTML = `${minutes}:${seconds}`
        time--
    }
}
timer()