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
  count++;
  console.log("addOne", count);
};
// SUBTRACT ONE
const minusOne = () => {
  count = count - 1;
  console.log("minusOne");
};
// RESET
const reset = () => {
  console.log("reset");
};

const appRoot = document.getElementById("app");

renderCounterApp = () => {
  // JSX doesn't have built in data binding
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
// Responsible for rendering template 1 or 2
ReactDOM.render(templateTwo, appRoot);
};
