// import needed modules
import { add, sub, multiply } from './utils.js';

// define and grab DOM elements
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

const subInput1 = document.getElementById('subtract-input-1');
const subInput2 = document.getElementById('subtract-input-2');
const subButton = document.getElementById('subtract-button');
const subResult = document.getElementById('subtract-result');


const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyResult = document.getElementById('multiply-result');


// event handlers - what needs to happen?
// logic and calculations
// update UI

addButton.addEventListener('click', () => {
    const num1 = Number(addInput1.value);
    const num2 = Number(addInput2.value);
    addResult.textContent = add(num1, num2);
    console.log(addResult);
});

subButton.addEventListener('click', () => {
    const num1 = Number(subInput1.value);
    const num2 = Number(subInput2.value);
    subResult.textContent = sub(num1, num2);
    console.log(subResult);
});


multiplyButton.addEventListener('click', () => {
    const num1 = Number(multiplyInput1.value);
    const num2 = Number(multiplyInput2.value);
    multiplyResult.textContent = multiply(num1, num2);
    console.log(multiplyResult);
});