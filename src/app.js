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

let count = 0;
// ADD ONE
const addOne = () => {
  console.log("addOne");
};
// SUBTRACT ONE
const minusOne = () => {
  console.log("minusOne");
};
// RESET
const reset = () => {
  console.log("reset");
};
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>RESET</button>
  </div>
);

// Challenge
// Make button with text -1 and will modify count. 
// For now just console.log("minusOne")
// Setup minus one function and register it as onClick handler
// Reset button- text value of reset
// Define function that fires every time button is clicked
// Log reset everytime buton is clicked

const appRoot = document.getElementById("app");
// Responsible for rendering template 1 or 2
ReactDOM.render(templateTwo, appRoot);
