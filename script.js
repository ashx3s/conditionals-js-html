"use strict";

// simple examples
let firstString = "this is our first string. yay!";
let firstNumber = 42;
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

// userForm.addEventListener("submit", handleSubmit);

// Calculator Code
const calculator = document.querySelector("#calculator");
const inputOne = document.querySelector("#first-value");
const inputTwo = document.querySelector("#second-value");
const operator = document.querySelector("#operator-select");
const calculatorOutput = document.querySelector("#output");

function calculate(event) {
  event.preventDefault();

  // DONE: verify that the information passed in are numbers
  if (isNaN(parseFloat(inputOne.value)) || isNaN(parseFloat(inputTwo.value))) {
    console.log("both values need to be numbers");
    return;
  }

  // DONE: calculate a and b variables depending on the selected operator
  let output;
  // if the user selects + than add
  if (operator.value === "+") {
    output = parseFloat(inputOne.value) + parseFloat(inputTwo.value);
  } else if (operator.value === "-") {
    output = parseFloat(inputOne.value) - parseFloat(inputTwo.value);
  } else if (operator.value === "*") {
    output = parseFloat(inputOne.value) * parseFloat(inputTwo.value);
  } else if (operator.value === "/") {
    output = parseFloat(inputOne.value) / parseFloat(inputTwo.value);
  } else {
    console.log("values canot be computed");
  }

  // DONE: render the output of the equation to the calculatorOutput
  calculatorOutput.textContent = output;
}

calculator.addEventListener("submit", calculate);
