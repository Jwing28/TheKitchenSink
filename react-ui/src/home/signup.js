import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FieldGroup from '../components/fieldgroup';
import { Alert, Button } from 'react-bootstrap';
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
          this.setState({
            error: !this.state.error,
            errorMessage: result.error
          });
        } else {
          this.props.history.push({
            pathname:'/profile',
            state: { user: result }
          });
        }
      }).catch(e => {
        console.log(`Failed to register user: ${e}`);
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
              <h3 className="Signup-form-title">Signup</h3>
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
              {
                this.state.error ?
                <Alert bsStyle="danger" className="Signup-error">
                  <strong>Error: {this.state.errorMessage}</strong>
                </Alert> : null
              }
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
