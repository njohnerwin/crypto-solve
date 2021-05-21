import { render } from "react-dom";
import React from 'react';

function Solve(props) {
  return (
    <div>
      <p>Solve page</p>
      <p>Crypto: {props.crypto}</p>
      <button onClick={props.onClick}>Go back</button>
    </div>
  )
}

export default Solve;