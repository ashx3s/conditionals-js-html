"use strict";
``;
let firstString = "this is our first string. yay!";
let firstNumber = 42;

// connect to html elements
const strElement = document.querySelector("#first-string");
const numElement = document.querySelector("#first-number");
const userNameEl = document.querySelector("#user-name");
const userIdEl = document.querySelector("#user-id");
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
