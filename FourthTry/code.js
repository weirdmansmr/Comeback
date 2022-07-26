const input = document.getElementById("input_num")
const btn = document.getElementById("btn_conv")

let length = document.getElementById('length')
let volume = document.getElementById('volume')
let mass = document.getElementById('mass')

/*
1 метр = 3.28083989501 футов
1 литр = 0.26417205 галлона
1 килограмм = 2.2046226 фунта
*/

btn.addEventListener("click", function() {
    const val = Number(input.value)
    /* проверка на цифры */
    if (isNaN(val) === false) {
        const result = calc(val)
        /* длина */length.textContent = `${val} meters = ${result.lengthCalc} feet | ${val} feet = ${result.lengthCalcRev} meters`
        /* объём */volume.textContent = `${val} liters = ${result.volumeCalc} gallons | ${val} gallons = ${result.volumeCalcRev} liters`
        /* масса */mass.textContent = `${val} kilos = ${result.massCalc} pounds | ${val} pounds = ${result.massCalcRev} kilos`
    } else {
        input.value = ''
        alert('Вводи цифры!!! 😡')
    }
    
})

function calc(value) {
    /* длина */ const foot = 3.28083989501
    let lengthCalc = (value * foot).toFixed(3)
    let lengthCalcRev = (value / foot).toFixed(3)
    /* объём */ const gallon = 0.26417205
    let volumeCalc = (value * gallon).toFixed(3)
    let volumeCalcRev = (value / gallon).toFixed(3)
    /* масса */ const pound = 2.2046226
    let massCalc = (value * pound).toFixed(3)
    let massCalcRev = (value / pound).toFixed(3)
    return {lengthCalc, lengthCalcRev, volumeCalc, volumeCalcRev, massCalc, massCalcRev}
}

input.addEventListener('keydown', function() {
    this.style.width = ((this.value.length + 1) * 39) + 'px'
})
