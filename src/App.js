import './App.css';
import React, { Component } from 'react';
import Main from './main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      crypto: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.crypto);
  }

  handleChange(event) {
    this.setState({crypto: event.target.value});
  }

  render() {
    return(
      <div className="App">
        <div className="header">
          <h1>crypto-solve</h1>
        </div>
        <div>
          <Main />
        </div>
      </div>
    )
  };
}

export default App;
