console.log("App.js is running!");

var app = {
  title: "Indecision App",
  subtitle: "Template React App",
  options: ["one", "two"]
};
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "no options"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
var user = {
  name: "Andrew",
  age: 31,
  location: "San Diego, California"
};

function getLocation(location) {
  if (location) {
    return <p>location: {location}</p>;
  }
}
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : "anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}

    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");
// Responsible for rendering template 1 or 2
ReactDOM.render(templateTwo, appRoot);
