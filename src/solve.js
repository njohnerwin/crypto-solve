import { render } from "react-dom";
import React, { Component } from 'react';
import LetterBox from './letterbox.js';

class Solve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letterkey: this.letters.split(""),
      lettersolve: {},
      decrypted: []
    };
    this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount() {
    let arrayobject = {};
    for (let i = 0; i <= this.state.letterkey.length; i++) {
      arrayobject[this.state.letterkey[i]] = "";
    }
    this.setState({lettersolve: arrayobject});
    this.setState({decrypted: JSON.parse(this.cryptosend)});
  }

  crypto = this.props.crypto.toLowerCase();
  cryptoarray = this.crypto.split("");
  cryptosend = JSON.stringify(this.cryptoarray);
  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }

  handleChange(event) {
    let letterkey = event.target.id;
    let newchar = event.target.value;
    let update = this.state.lettersolve;
    let decrypt = this.state.decrypted;

    //checks if the input is a letter
    if (this.isCharacterALetter(newchar)) {

      //then changes the corresponding key in lettersolve to the new char
      update[letterkey] = newchar.toUpperCase();

      //then iterates through the cryptogram to find matches
      for (let i = 0; i < this.cryptoarray.length; i++) {
        //when there's a match in the original crypto...
        if (this.cryptoarray[i].toUpperCase() == letterkey) {
          //replace the corresponding printed letters with the new character
          decrypt[i] = newchar.toUpperCase();
        }
      } 
      //then update the state appropriately
      this.setState({lettersolve: update, decrypted: decrypt});
    } else {
      //if the input isn't a letter, clear the corresponding crypto key
      update[letterkey] = "";
      console.log(update);

      //then iterates through the cryptogram to find matches
      for (let i = 0; i < this.cryptoarray.length; i++) {
        //when there's a match in the original crypto...
        if (this.cryptoarray[i].toUpperCase() == letterkey) {
          //replace the corresponding printed letters with the new character
          decrypt[i] = this.cryptoarray[i];
        }
      } 
      //then update the state appropriately
      this.setState({lettersolve: update, decrypted: decrypt});
    }
  }

  render() {
    return (
      <div>
      <p>To solve, fill in the blanks on the letter key (bottom) to automatically replace all encrypted letters that match those keys.</p>
        <div className="crypto-text">
          <p>{this.state.decrypted.map((x) => 
            x === x.toUpperCase() ?
            <b className="white-char">{x}</b> :
            <b className="black-char">{x.toUpperCase()}</b>)}</p>
        </div>
        <div className="alpha-key">
          {this.state.letterkey.map((x) => 
            <LetterBox letterkey={x} onChange={this.handleChange} />
          )}
          <br />
          {(this.state.letterkey.map((x) => 
            <b className="index-char">{x}</b>
          ))}
          <br />
          <button id="return-button" onClick="">Go back</button>
        </div>
      </div>
    )
  }
}

export default Solve;