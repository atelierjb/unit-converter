/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function () {
    let inputValue = inputEl.value

    lengthEl.innerHTML = `${inputValue} meters = ${Number(inputValue * 3.281).toFixed(3)} feet <br> ${inputValue} feet = ${Number(inputValue / 3.281).toFixed(3)} meters`

    volumeEl.innerHTML = `${inputValue} liters = ${Number(inputValue * 0.264).toFixed(3)} gallons <br> ${inputValue} gallons = ${Number(inputValue / 0.264).toFixed(3)} liters`

    massEl.innerHTML = `${inputValue} kilos = ${Number(inputValue * 2.204).toFixed(3)} pounds <br> ${inputValue} pounds = ${Number(inputValue / 2.204).toFixed(3)} kilos`
})