import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FieldGroup from '../components/fieldgroup';
import { Alert, Button } from 'react-bootstrap';
import Header from '../components/header';
import Footer from '../components/footer';
import './styles/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username:'',
      password:'',
      result: null,
      error: false,
      errorMessage: ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      username:this.state.username,
      password: this.state.password
    });

    fetch('/login', {
      method: 'POST',
      body: data,
      headers:{
        'content-type':'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(result => {
        if('error' in result) {
          this.setState({
            error: !this.state.error,
            errorMessage: result.error
          });
        } else {
          console.log('login?');
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
    console.log('error', this.state.error);
    console.log(this.state.errorMessage);
    return(
      <div className="Login-container">
        <Header />
          <form onSubmit={this.onSubmit} className="Login-form">
            <h3 className="Login-form-title">Login</h3>
            <FieldGroup
              id="Login-username"
              className="Login-form-control"
              label="Username"
              name="username"
              placeholder="Enter your username"
              value={this.state.username}
              onChange={this.onInputChange}
              required
            />
            <FieldGroup
              id="Login-password"
              className="Login-form-control"
              label="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onInputChange}
              required
            />
            <Button bsStyle="primary" type="submit">Submit</Button>
            {
              this.state.error ?
              <Alert bsStyle="danger" className="Login-error">
                <strong>Error: {this.state.errorMessage}</strong>
              </Alert> : null
            }
            <p className="Login-form-message">Not registered?&nbsp;
              <a onClick={() => this.props.history.push({
                pathname: '/signup'
              })}>
                Signup
              </a>
            </p>
          </form>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Login);
