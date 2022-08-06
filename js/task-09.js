function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
// console.log(bodyEl);

const changeColorEl = document.querySelector('.color');
// console.log(changeColorEl);

const changeColorBtnEl = document.querySelector('.change-color');
// console.log(changeColorBtnEl);

changeColorBtnEl.addEventListener('click', onButtomClick)

function onButtomClick(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  console.log(changeColorEl.textContent = getRandomHexColor());
};