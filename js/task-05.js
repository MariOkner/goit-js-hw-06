const input = document.querySelector('#name-input');
// console.log(input);

const outputText = document.querySelector('#name-output');
console.log(outputText.textContent);

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    outputText.textContent === ''? outputText.textContent : outputText.textContent = event.currentTarget.value;
}






// ____________дивилася як працюють різні події___________________
// input.addEventListener('focus', onInputFocus);
// function onInputFocus() {
//     console.log('Получил фокус')
// };

// input.addEventListener('blur', onInputBlur);
// function onInputBlur() {
//     console.log('Снял фокус')
// };

// input.addEventListener('change', onInputChange);
// function onInputChange(event) {
//     console.log(event.currentTarget.value)
// }