// const variable (these variables cannot be reassigned)
const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const form = document.getElementById ('passwordGeneratorForm')

//Eventlistner 
characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)
// this eventlistner stops form from submitting and refreshing page
form.addEventListener('submit', e => {
    e.preventDefault
})

//fuction using eventlistners takes event argument 
// defining const value as the same for both (this variable cannot be reassigned)
// this fuction makes the slider and the number value sync up
function syncCharacterAmount (e){
    const value = e.target.value
    characterAmountRange.value = value
    characterAmountNumber.value = value
}

