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
var user = {
  name: "Andrew",
  age: 31,
  location: "San Diego, California"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "location: ",
      location
    );
  }
}
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");
// Responsible for rendering template 1 or 2
ReactDOM.render(templateTwo, appRoot);
