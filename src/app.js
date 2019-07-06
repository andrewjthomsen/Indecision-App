console.log("App.js is running!");

// Create app object title/subtitle
// Use title/ subtitle in template
// Render template
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
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p> 
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
