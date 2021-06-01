import { render } from "react-dom";
import React from 'react';

function LetterBox(props) {
  return(
    <input id={props.letterkey} type="text" maxlength="1" className="letter-box" onChange={props.onChange} />
  );
}

export default LetterBox;