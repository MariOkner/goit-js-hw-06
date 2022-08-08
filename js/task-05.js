const input = document.querySelector('#name-input');

const outputText = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    // console.log(event.currentTarget.value);
    outputText.textContent = event.currentTarget.value === '' ? 'Anonymous' : event.currentTarget.value;
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