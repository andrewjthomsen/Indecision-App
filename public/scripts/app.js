"use strict";

console.log("App.js is running!");

var app = {
  title: "Indecision App",
  subtitle: "Template React App",
  options: ["one", "two"]
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options" : "no options"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

var count = 0;
// ADD ONE
var addOne = function addOne() {
  console.log("addOne");
};
// SUBTRACT ONE
var minusOne = function minusOne() {
  console.log("minusOne");
};
// RESET
var reset = function reset() {
  console.log("reset");
};
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: minusOne },
    "-1"
  ),
  React.createElement(
    "button",
    { onClick: reset },
    "RESET"
  )
);

// Challenge
// Make button with text -1 and will modify count. 
// For now just console.log("minusOne")
// Setup minus one function and register it as onClick handler
// Reset button- text value of reset
// Define function that fires every time button is clicked
// Log reset everytime buton is clicked

var appRoot = document.getElementById("app");
// Responsible for rendering template 1 or 2
ReactDOM.render(templateTwo, appRoot);
