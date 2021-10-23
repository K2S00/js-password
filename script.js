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
const passwordDisplay = document.getElementById ('passwordDisplay')

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
const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
passwordDisplay.innerText = password

})

//Password generation fuction
//using ASCII Character codes

function generatePassword(characterAmount,includeUppercase,includeNumbers,includeSymbols){

    //this makes our lowercase a default therefore it does not need to be selected 
    let charCodes = LOWERCASE_CHAR_CODES
    // this is the code to add uppercase, numbers and symbols 
    if (includeUppercase) charCodes = charCodes.concat
    (UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat
    (NUMBER_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat
    (SYMBOL_CHAR_CODES)
    

    // emppty arry to store password
    const passwordCharacters = []
    // for loop for  all diffrent charcter maps 
        // i = 0 when i is less than characterAmout we will add on another i each time
    for (let i = 0; i < characterAmount, i++;) 
    {
        // creates random value from list of character codes
        // math.floor = returns the largest integer less than or equal to a given number
        // math.random = selects the initial seed to the random number generation algorithm
        const characterCode = charCodes[Math.floor(Math.random () * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))

    }
    // returning password characters on an empty string 
    return passwordCharacters.join('')
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

