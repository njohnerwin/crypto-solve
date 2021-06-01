import { render } from "react-dom";
import React, { Component } from 'react';
import LetterBox from './letterbox.js';

class Solve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: "",
      letterkey: this.letters.split(""),
      lettersolve: {}
    };
    this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount() {
    let arrayobject = {};
    for (let i = 0; i <= this.state.letterkey.length; i++) {
      arrayobject[this.state.letterkey[i]] = "";
    }
    console.log(arrayobject);
    this.setState({lettersolve: arrayobject});
  }

  crypto = this.props.crypto;
  cryptoarray = this.crypto.split("");
  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }

  handleChange(event) {
    let letterkey = event.target.id;
    let newchar = event.target.value;
    let update = this.state.lettersolve;

    if (this.isCharacterALetter(newchar)) {
      update[letterkey] = event.target.value.toUpperCase();
      this.setState({lettersolve: update});
      console.log(this.state.lettersolve);
    } 
  }

  render() {
    return (
      <div>
      <p>To solve, fill in the blanks on the letter key (bottom) to automatically replace all encrypted letters that match those keys.</p>
        <div className="crypto-text">
          <p>{this.cryptoarray.map((x) => 
            (!this.isCharacterALetter(x) ? 
              <b className="white-char">{x}</b> :
              <b className="black-char">{x.toUpperCase()}</b>))}</p>
        </div>
        <div className="alpha-key">
          {this.state.letterkey.map((x) => 
            <LetterBox letterkey={x} onChange={this.handleChange} />
          )}
          <br />
          {(this.state.letterkey.map((x) => 
            <b className="index-char">{x}</b>
          ))}
        </div>
      </div>
    )
  }
}

export default Solve;