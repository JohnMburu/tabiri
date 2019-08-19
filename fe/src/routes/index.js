import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/home';
import Login from '../components/login';
import Register from '../components/register';

const routes = (
  <div>
    
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/home" component={Home} />
      
    </Switch>
  </div>
)

export default routes