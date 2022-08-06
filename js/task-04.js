// const CounterPlugin = function ({ counterValue = 0, step = 1 } = {}) {
//     this._value = counterValue;
//     this._step = step;
// };

// CounterPlugin.prototype.increment = function () {
//     this._value += this._step;
// };

// const counter = new CounterPlugin({ step: 1 });

// console.log(counter);
// counter.increment();
// console.log(counter);

// __________________________

// const counterButtomEl = document.querySelectorAll('#counter button');

let valueEl = Number(document.querySelector('#value').textContent);
console.log(valueEl);

let counterValue = document.querySelector('#value');
console.log(counterValue);

const buttonDecEl = document.querySelector('#counter');
const decrementButtonEl = buttonDecEl.firstElementChild;
console.log(decrementButtonEl);

const buttonIncEl = document.querySelector('#counter')
const incrementButtonEl = buttonIncEl.lastElementChild;
console.log(incrementButtonEl);

decrementButtonEl.addEventListener('click', event => {
    valueEl -= 1;
    counterValue.innerText = valueEl;
});

incrementButtonEl.addEventListener('click', event => {
    valueEl += 1;
    counterValue.innerText = valueEl;
});


