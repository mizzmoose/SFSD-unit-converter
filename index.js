/*
1 meter = 3.281 feet
1 foot = 0.305 meter
1 liter = 0.264 gallon
1 gallon = 3.785 liter
1 kilogram = 2.204 pound 
1 pound = 0.454 kilogram
*/

// conversion units
const convertedFoot = 0.305
const convertedMeter = 3.281
const convertedLiter = 0.264
const convertedGallon = 3.785
const convertedPound = 0.454 
const convertedKilo = 2.204 

//grab input value and convert button click
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

// paragraph text
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const errorEl = document.getElementById("error-el")

// reusable function to run unit conversion calculation
function genericConversion(input, convertedUnit) {
    return input * convertedUnit
}

// reusable function to display converted units 
function genericText(
    input,
    convertedUnitA, 
    convertedUnitNameA, 
    convertedUnitB, 
    convertedUnitNameB) {
    let conversionResultA = genericConversion(input, convertedUnitA).toFixed(3)
    let conversionResultB = genericConversion(input, convertedUnitB).toFixed(3)
    let generatedText = `
    ${input} ${convertedUnitNameA} = ${conversionResultA} ${convertedUnitNameB} | 
    ${input} ${convertedUnitNameB} = ${conversionResultB} ${convertedUnitNameA}
    `
    return generatedText
}

//listen for button click to run check & display conversions
convertBtn.addEventListener("click", function() {
    let inputValue = inputEl.value
    let validateInput = Number(inputValue)
    // check it can be converted into a number
    // display error msg if it cannot
    if (Boolean(validateInput) === false) {
        errorEl.textContent = "Please enter a valid number"
        lengthEl.textContent = ""
        volumeEl.textContent = ""
        massEl.textContent = ""
    // if it can, run conversions
    // display conversion in correct space
    } else {
        errorEl.textContent = ""
        lengthEl.textContent = genericText(validateInput, convertedMeter, "meters", convertedFoot, "feet")
        volumeEl.textContent = genericText(validateInput, convertedLiter, "liters", convertedGallon, "gallons")
        massEl.textContent = genericText(validateInput, convertedKilo, "kilos", convertedPound, "pounds")
    }
    
})