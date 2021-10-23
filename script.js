// const variable (these variables cannot be reassigned)
const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const includeUppercaseElement = document.getElementById
('includeUppercase')
const includeNumbersElement = document.getElementById
('includeNumbers')
const includeSymbolsElement = document.getElementById
('includeSymbols')
const form = document.getElementById ('passwordGeneratorForm')

const LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65, 90)
const NUMBER_CHAR_CODES = arrayFromLowtoHigh(48, 57)
// when you concat you merge multiple arrays together 
const SYMBOL_CHAR_CODES = arrayFromLowtoHigh(33, 47).concat(
    arrayFromLowtoHigh(58, 64)  
).concat(
    arrayFromLowtoHigh(91, 96) 
).concat(
    arrayFromLowtoHigh(123, 126) 
)


//Eventlistner 
characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)
// this eventlistner stops form from submitting and refreshing page
form.addEventListener('submit', e => {
    e.preventDefault ()

// password var and creating generatePassword fuction
// Lowercase characters will be set to the default 
const characterAmount = characterAmountNumber.value
const includeUppercase = includeUppercaseElement.checked
const includeNumbers = includeNumbersElement.checked 
const includeSymbols = includeSymbolsElement.checked   
const password = generatePassword(characterAmount, includeUppercase, includeNumbers,includeSymbols)
})

//Password generation fuction
//using ASCII Character codes

function generatePassword(characterAmount,includeUppercase,includeNumbers,includeSymbols){
console.log (LOWERCASE_CHAR_CODES)
}

//fuction to generate arrays 
//using a for loop i = low and will add one each time until it gets to the high
function arrayFromLowtoHigh(low, high){
 // empty array   
    const array = []
    for(let i = low; i <= high; i++){
        array.push(i)
}
        return array
}

//fuction using eventlistners takes event argument 
// defining const value as the same for both (this variable cannot be reassigned)
// this fuction makes the slider and the number value sync up
function syncCharacterAmount (e){
    const value = e.target.value
    characterAmountRange.value = value
    characterAmountNumber.value = value
}

