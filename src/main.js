import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home.js';
import Solve from './solve.js';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/solve" component={Solve} />
  </Switch>
)

export default Main;