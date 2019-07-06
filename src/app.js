console.log("App.js is running!");
// If statements 
// Ternary operators
// Logical and operator
var app = {
  title: 'Indecision App',
  subtitle: 'Template React App'
};
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
var user = {
  name: 'Andrew',
  age: 31,
  location: 'San Diego, California'
};
// If statement practice
function getLocation(location) {
 if(location) {
   return <p>location: {location}</p>;
 } 
}
// Ternary operator practice
// Logical and operator practice
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'anonymous'}</h1>
   {user.age >= 18 &&  <p>Age: {user.age}</p>}
  
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");
// Responsible for rendering template 1 or 2
ReactDOM.render(templateTwo, appRoot);
