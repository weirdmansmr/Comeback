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
const units = {
    foot: 3.28083989501,
    gallon: 0.26417205,
    pound: 2.2046226,
}

class Calc {
    constructor (inputNum, variable) {
        this.inputNum = inputNum;
        this.variable = variable;
    }
    Multiply() {
        return (this.inputNum * this.variable).toFixed(3)
    }
    Divide() {
        return (this.inputNum / this.variable).toFixed(3)
    }
} /* стоит уменьшить */

btn.addEventListener("click", function() {
    const val = Number(input.value)
    /* проверка на цифры */
    if (isNaN(val) === false) {
        let lengthCalc = new Calc(val, units.foot)
        let volumeCalc = new Calc(val, units.gallon)
        let massCalc = new Calc(val, units.pound)
        /* длина */length.textContent = `${val} meters = ${lengthCalc.Multiply()} feet | ${val} feet = ${lengthCalc.Divide()} meters`
        /* объём */volume.textContent = `${val} liters = ${volumeCalc.Multiply()} gallons | ${val} gallons = ${volumeCalc.Divide()} liters`
        /* масса */mass.textContent = `${val} kilos = ${massCalc.Multiply()} pounds | ${val} pounds = ${massCalc.Divide()} kilos`
    } else {
        input.value = ''
        alert('Вводи цифры!!! 😡')
    }
})

input.addEventListener('keydown', function() {
    this.style.width = ((this.value.length + 1) * 39) + 'px'
})
