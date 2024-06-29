import logo from './logo.svg';
import './App.css';
import { Component } from "react";

// function App()
class App extends Component {

  constructor() {
    super();

    this.state = {
      name: "heena",
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>my name is {this.state.name}</h2>
          <button>Change Name</button>
        </header>
      </div>
    );
  }

}

export default App;
