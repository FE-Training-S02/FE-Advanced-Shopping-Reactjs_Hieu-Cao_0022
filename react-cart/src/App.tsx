import React from 'react';

import { Switch, Route } from 'react-router-dom';

import './stylesheets/styles.scss'
import Cart from './app/cart/Cart';
import Home from './app/home/Home';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/cart' component={Cart}></Route>
    </Switch>
  );
}

export default App;
