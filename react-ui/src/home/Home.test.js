import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
// import Login from './login';

import Adapter from 'enzyme-adapter-react-16';
//requirement of enzyme 3
configure({ adapter: new Adapter() });

describe('<Login />', () => {
  const mockEvent = { preventDefault: jest.fn() };
  const mockUpdated = jest.fn();

  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(testusers.correct)
  }));

  class Login extends React.Component {
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
            <form onSubmit={this.onSubmit} className="Login-form">
              <h3 className="Login-form-title">Login</h3>
              <input
                id="Login-username"
                className="Login-form-control"
                label="Username"
                name="username"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={this.onInputChange}
                required
              />
              <input
                id="Login-password"
                className="Login-form-control"
                label="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.onInputChange}
                required
              />
              <button bsStyle="primary" type="submit">Submit</button>
              <p className="Login-form-message">Not registered?&nbsp;
                <a onClick={() => this.props.history.push({
                  pathname: '/signup'
                })}>
                  Signup
                </a>
              </p>
            </form>
        </div>
      );
    }
  }

  let LoginWrapper;
  beforeEach(() => {
    LoginWrapper = shallow(<Login />);
  });

  it('allows user to enter a username and password',() => {
    const usernameInput = LoginWrapper.find('#Login-username');
    usernameInput.value = 'jon';
    expect(usernameInput.value).toBe('jon');

    const passwordInput = LoginWrapper.find('#Login-password');
    passwordInput.value = 'jon';
    expect(passwordInput.value).toBe('jon');
  });

  it('calls fetch upon correct credentials submission by user',() => {
    const expectedFetchBody = {
      body: JSON.stringify({
        username: 'jon',
        password: 'jon'
      }),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
    };

    LoginWrapper.setState({ username: 'jon', password:'jon'});
    LoginWrapper.instance().onSubmit(mockEvent);
    expect(window.fetch).toHaveBeenCalledWith('/login', expectedFetchBody);
  });
})
