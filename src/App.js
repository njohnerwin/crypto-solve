import './App.css';
import React, { Component } from 'react';
import Home from './home.js';
import Solve from './solve.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputfield: "",
      crypto: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backToHome = this.backToHome.bind(this);
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.crypto);
    this.setState({crypto: this.state.inputfield});
  }

  handleChange(event) {
    this.setState({inputfield: event.target.value});
  }

  backToHome(event) {
    this.setState({inputfield: "", crypto: ""});
    //window.location.reload(false);
  }

  render() {
    return(
      <div className="App">
        <div className="header">
          <h1>crypto-solve</h1>
        </div>
        <div>
          {!this.state.crypto ? 
            <Home 
              onChange={this.handleChange} 
              onSubmit={this.handleSubmit} /> 
              : <Solve crypto={this.state.crypto} onClick={this.backToHome} />}
        </div>
      </div>
    )
  };
}

export default App;
