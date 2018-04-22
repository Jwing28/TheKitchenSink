import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import Login from './Login';
import Signup from './Signup';
import Landing from './Landing';
import FourOhFour from '../components/404';


//we want user to go to login OR sign up, not both = switch
class Main extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route component={FourOhFour}/>
      </Switch>
    );
  }
}

export default Main;
