import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import UnitsList from './Items';

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={LoginPage}/>
      <Route path='/items' component={UnitsList}/>
    </Switch>
  );
}
