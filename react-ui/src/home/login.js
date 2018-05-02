import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FieldGroup from '../components/fieldgroup';
import { Button } from 'react-bootstrap';
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
      error: false
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
      <div className="Login-container">
        <Header />
          <form onSubmit={this.onSubmit} className="Login-form">
            <FieldGroup
              className="Login-form-control"
              label="Username"
              name="username"
              placeholder="Enter your username"
              value={this.state.username}
              onChange={this.onInputChange}
              required
            />
            <FieldGroup
              className="Login-form-control"
              label="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onInputChange}
              required
            />
            <Button bsStyle="primary" type="submit">Submit</Button>
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
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: null,
//       fetching: true
//     };
//   }
//
//   componentDidMount() {
//     fetch('/api')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`status ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(json => {
//         this.setState({
//           message: JSON.stringify(json),
//           fetching: false
//         });
//       }).catch(e => {
//         this.setState({
//           message: `API call failed: ${e}`,
//           fetching: false
//         });
//       })
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//         </div>
//         <p className="App-intro">
//             {'create-react-app with a custom Node/Express server'}
//         </p>
//         <p className="App-intro">
//           {this.state.fetching
//             ? 'Fetching message from API'
//             : this.state.message}
//         </p>
//       </div>
//     );
//   }
// }
