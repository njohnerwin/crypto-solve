import { render } from "react-dom";
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return(
      <div>
        <div className="intro-text">
          <p>A <i>simple substitution cipher</i> is a popular and simple variety of cryptogram in which each letter in the alphabet is replaced with another letter consistently across the text. For example, with a simple substitution cipher in which "e = i", "h = t", "a = w", and "t = o", the phrase "oti two" will read translated as "the hat."</p> 
          <p>This tool will not solve a simple substitution cipher for you (yet) but it WILL help you solve them yourself more quickly, by automatically filling in all translated letters as you go, cutting down on busywork and helping you find the solution more quickly. (Mysteriously, it also seems to be able to help translate some fictional languages...)</p>
          <p>To start, input the cryptogram you wish to solve (the encrypted text, pre-translation) exactly as written (with spaces and punctuation, but not line breaks) below.</p>
        </div>
        <div id="home-input">
          <textarea id="crypto-input" onChange={this.handleChange}></textarea><br />
          <button id="submit" onClick={this.handleSubmit}>Begin</button>
        </div>
      </div>
    )
  };
}

export default Home;