"use strict";
let firstString = "this is our first string. yay!";
let firstNumber = 42;

// simple examples
const strElement = document.querySelector("#first-string");
const numElement = document.querySelector("#first-number");

// user form examples
const userNameEl = document.querySelector("#user-name");
const userIdEl = document.querySelector("#user-id");
const userForm = document.querySelector("#user-form");

/* 
ways to add information to html:
1. textContent == only text, not style aware
2. innerText == style aware and more powerful but more expensive
3. innerHTML == most powerful, most insecure, parses actual html elements

*/

strElement.textContent = firstString;
numElement.textContent = "the meaning of life is" + " " + firstNumber;

// user examples

let userName;

if (!userName) {
  userNameEl.textContent = "User is not logged in";
} else {
  userNameEl.textContent = userName;
}

let userId;

if (!userId) {
  const message = "enter user Id";
  userIdEl.textContent = message;
} else {
  userIdEl.textContent = userId;
}

function handleSubmit(event) {
  event.preventDefault();
  const email = userForm.email.value;
  const name = userForm.username.value;
  console.log(name, email);
}

userForm.addEventListener("submit", handleSubmit);

// Calculator Code
const calculator = document.querySelector("#calculator");
const calculatorOutput = document.querySelector("#output");

function useCalculator(event) {
  // prevent page refresh
  event.preventDefault();
  // get values
  const operand1 = parseFloat(document.querySelector("#operand-1").value);
  const operand2 = parseFloat(document.querySelector("#operand-2").value);
  const operator = document.querySelector("#operator").value;
  // Fail Fast
  if (isNaN(operand1) || isNaN(operand2)) {
    throw new Error("Invalid input, both operands should be numbers");
  }
  // set and calculate output
  let output = calculate(operator, operand1, operand2);

  calculatorOutput.textContent = output;
}

// calculate helper function
function calculate(operator, a, b) {
  return operator === "+"
    ? add(a, b)
    : operator === "-"
    ? subtract(a, b)
    : operator === "*"
    ? multiply(a, b)
    : operator === "/"
    ? divide(a, b)
    : "this operator is not allowed";
}

function add(a, b) {
  a + b;
}
function subtract(a, b) {
  a - b;
}
function multiply(a, b) {
  a * b;
}
function divide(a, b) {
  a / b;
}

calculator.addEventListener("submit", useCalculator);
