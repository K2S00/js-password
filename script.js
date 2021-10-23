// const variable (these variables cannot be reassigned)
const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')

//Eventlistner 
characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)

//fuction using eventlistners takes event argument 
// defining const value as the same for both (this variable cannot be reassigned)
// this fuction makes the slider and the number value sync up
function syncCharacterAmount (e){
    const value = e.target.value
    characterAmountRange.value = value
    characterAmountNumber.value = value

}