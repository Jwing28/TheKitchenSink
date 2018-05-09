import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Login from './login';

import Adapter from 'enzyme-adapter-react-16';
//requirement of enzyme 3 
configure({ adapter: new Adapter() });


describe('<Login />', () => {
  const testUsers = {
    correct: {
      username:'jon',
      password:'jon'
    },
    wrongPassword: {
      username:'jon',
      password:'oops'
    },
    invalidUser: {
      username:'bob',
      password:'bob'
    }
  };

  const successfulLogin = {
    username:'jon',
    favorites:[
        "Jalapeno Popper Grilled Cheese Sandwich",
        "Buffalo Chicken Grilled Cheese Sandwich",
        "Slow Cooker Chicken Tortilla Soup",
        "White Chicken Enchiladas",
        "Mac and Cheese with Roasted Chicken, Goat Cheese, and Rosemary",
        "White Chicken Enchiladas"
      ]
  };

  it('allows user to enter a username and password',() => {
    const LoginWrapper = shallow(<Login />);
    const usernameInput = LoginWrapper.find('#Login-username');
    usernameInput.value = testUsers.correct.username;
    expect(usernameInput.value).toBe('jon');

    const passwordInput = LoginWrapper.find('#Login-password');
    passwordInput.value = testUsers.correct.password;
    expect(passwordInput.value).toBe('jon');
  });

  it('calls fetch upon credentials submission by user',() => {

  });

  it('logs user in with correct credentials',() => {

  });

  it('throws error when invalid user used',() => {

  });

  it('throws error when invalid password used',() => {

  });
})

/*
  test 1.
  create dom element for login
  setup login info
  simulate submit form i.e. component.find('#submitButton').simulate('submit');
  make sure get successful response from db.

  test2
  test that invalid login fails
    test2a - > user does not exist
    test2b - > correct user, wrong password
*/
