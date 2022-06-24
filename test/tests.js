// IMPORT code to test here
import { add, sub, multiply } from '../utils.js';

const test = QUnit.test;

test('adds two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 3;
    const num2 = 15;
    const expected = 18;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtracts a number from a number', (expect) => {
    //Arrange
    const num1 = 7;
    const num2 = 4;
    const expected = 3;
    //Act
    const actual = sub(num1, num2);

    //Expect
    expect.equal(actual, expected);
});

test('multiplies two numbers', (expect) => {
    //Arrange
    const num1 = 5;
    const num2 = 2;
    const expected = 10;
    //Act
    const actual = multiply(num1, num2);

    //Expect
    expect.equal(actual, expected);
});
