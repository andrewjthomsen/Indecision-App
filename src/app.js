// React components require one method to be defined "render"

class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your lif in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <Option />
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <AddOption />
      </div>
    );
  }
}

ReactDom.render(<IndecisionApp />, document.getElementById("app"));
