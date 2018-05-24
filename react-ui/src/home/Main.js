import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import Login from './login';
import Signup from './signup';
import Landing from './Landing';
import Profile from '../users/profile';
import Recipes from '../users/Recipes';
import About from '../home/About';
import FourOhFour from '../components/404';
import { BrowserRouter } from 'react-router-dom';

class Main extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/recipes" component={Recipes}/>
          <Route path="/about" component={About}/>
          <Route component={FourOhFour}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Main;
