'use strict';

console.log("App.js is running!");
// If statements 
// Ternary operators
// Logical and operator
var app = {
  title: 'Indecision App',
  subtitle: 'Template React App'
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);
var user = {
  name: 'Andrew',
  age: 31,
  location: 'San Diego, California'
};
// If statement practice
function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'location: ',
      location
    );
  }
}
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");
// Responsible for rendering template 1 or 2
ReactDOM.render(templateTwo, appRoot);
