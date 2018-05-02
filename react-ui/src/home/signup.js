import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FieldGroup from '../components/fieldgroup';
import { Button, Panel } from 'react-bootstrap';
import Header from '../components/header';
import Footer from '../components/footer';
import './styles/Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username:'',
      password:'',
      result: null,
      error: false
    };
  }

  //register route must check if
  //user name already exists
    //if exist, need to popup link to send them to login

    //Username
    //create a password

  onSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      username:this.state.username,
      password: this.state.password
    });
    //need to create route ****
    fetch('/register', {
      method: 'POST',
      body: data,
      headers:{
        'content-type':'application/json'
      }
    })
      .then(response => {
        if (response.error) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(result => {
        if('error' in result) {
          this.setState({ error: !this.state.error });
        } else {
          this.props.history.push({
            pathname:'/profile',
            state: { user: result }
          });
        }
      }).catch(e => {
        console.log(`API call failed: ${e}`);
      });
  }

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return(
      <div className="Signup-container">
        <Header />
            <form onSubmit={this.onSubmit} className="Signup-form">
              <FieldGroup
                className="Signup-form-control"
                label="Create username"
                name="username"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={this.onInputChange}
                required
              />
              <FieldGroup
                className="Signup-form-control"
                label="Create password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.onInputChange}
                required
              />
              <Button bsStyle="primary" type="submit">Submit</Button>
              <p className="Signup-form-message">Already registered?&nbsp; 
                <a onClick={() => this.props.history.push({
                  pathname: '/login'
                })}>
                  Login
                </a>
              </p>
            </form>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Signup);
