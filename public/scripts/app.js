'use strict';

console.log("App.js is running!");

// JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
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
var userName = 'Andrew';
var userAge = 31;
var userLocation = 'San Diego, California';
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    username.toUpperCase()
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    userAge
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    userLocation
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
