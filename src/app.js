console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "Template React App",
  options: ["one", "two"]
};
const template = (
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


const appRoot = document.getElementById("app");
// Responsible for rendering template 1 or 2
ReactDOM.render(template, appRoot);
