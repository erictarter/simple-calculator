// DOM
const display = document.getElementById('display');
const allButtons = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const times = document.getElementById('times');
const equals = document.getElementById('equals');
const divide = document.getElementById('divide');

const numbers = document.querySelectorAll('.num');

let inputs = [];
let lastOp = '';

let displayNums = '';
let result = 0;

// DISPLAY NUMBER

numbers.forEach(num =>
  num.addEventListener('click', e => {
    if (displayNums.length < 12) {
      displayNums += e.target.innerText;
      display.innerText = displayNums;
      console.log(displayNums.length);
    }
  })
);

// CLEAR

clearBtn.addEventListener('click', () => {
  displayNums = '';
  display.innerText = '';
  inputs = [];
  result = 0;
  allButtons.forEach(btn => {
    if (btn.classList.contains('num')) {
      btn.disabled = false;
    }
  });
});

function calculate(operator) {
  lastOp = operator;

  allButtons.forEach(btn => {
    if (btn.classList.contains('num')) {
      btn.disabled = false;
    }
  });

  if (displayNums.length > 0) {
    inputs.push(parseInt(displayNums));
    displayNums = '';
    display.innerText = '';
    result += inputs[inputs.length - 1];
  }
}

function showRes() {
  if (displayNums !== '') {
    // CHECK OPERATORS

    lastOp === '+'
      ? (display.innerText = result + parseInt(displayNums))
      : null;
    lastOp === '+' ? (result += parseInt(displayNums)) : null;

    lastOp === '-'
      ? (display.innerText = result - parseInt(displayNums))
      : null;
    lastOp === '-' ? (result -= parseInt(displayNums)) : null;

    lastOp === '*'
      ? (display.innerText = result * parseInt(displayNums))
      : null;
    lastOp === '*' ? (result *= parseInt(displayNums)) : null;

    lastOp === '/'
      ? (display.innerText = result / parseInt(displayNums))
      : null;
    lastOp === '/' ? (result /= parseInt(displayNums)) : null;

    displayNums = '';
    allButtons.forEach(btn => {
      if (btn.classList.contains('num')) {
        btn.disabled = true;
      }
    });
  }
}

plus.addEventListener('click', () => calculate('+'));
minus.addEventListener('click', () => calculate('-'));
times.addEventListener('click', () => calculate('*'));
divide.addEventListener('click', () => calculate('/'));

equals.addEventListener('click', showRes);
