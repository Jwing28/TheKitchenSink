import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FieldGroup from '../components/fieldgroup';
import { Button } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { username:'' , password:'', result: null, message:'' }
  }

  onSubmit = (e) => {
    e.preventDefault();
    fetch('/api')
      .then(response => {
        //ex. if response is not 200, throw error
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        //logic should be in server not here

        this.setState({
          result: JSON.stringify(json),
        });
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
      <form onSubmit={this.onSubmit} className="Login-form">
        <FieldGroup
          id="formControlsUsername"
          label="Username"
          name="username"
          placeholder="Enter your username"
          value={this.state.username}
          onChange={this.onInputChange}
        />
        <FieldGroup
          id="formControlsPassword"
          label="Password"
          name="password"
          value={this.state.password}
          onChange={this.onInputChange}
        />
        <div><Link to='/profile'>Profile</Link></div>
        <Button type="submit">Submit</Button>
        <h3>See users: {this.state.result}</h3>
      </form>
    );
  }
}

export default Login;
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
