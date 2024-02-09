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

// calculator examples
//  connect to form itself in html file
const calculator = document.querySelector("#calculator");
//  connect to first number in html file
const inputOne = document.querySelector("#first-value");
//  connect to second number in html file
const inputTwo = document.querySelector("#second-value");
// connect to operator
const operator = document.querySelector("#operator-select");
//  connect to output in html file
const calculatorOutput = document.querySelector("#output");
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

// userForm.addEventListener("submit", handleSubmit);

// Calculator Code
function calculate(event) {
  // prevent page refresh
  event.preventDefault();
  let output;
  switch (operator.value) {
    case "+":
      output = parseFloat(inputOne.value) + parseFloat(inputTwo.value);
      break;
    case "-":
      output = parseFloat(inputOne.value) - parseFloat(inputTwo.value);
      break;
    case "*":
      output = parseFloat(inputOne.value) * parseFloat(inputTwo.value);
      break;
    case "/":
      output = parseFloat(inputOne.value) / parseFloat(inputTwo.value);
  }
  console.log(output);
}

calculator.addEventListener("submit", calculate);
