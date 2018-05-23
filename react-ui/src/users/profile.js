import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import List from '../components/list';
import { Button, PageHeader } from 'react-bootstrap';
import FieldGroup from '../components/fieldgroup';
import Header from '../components/header';
import Footer from '../components/footer';
import './styles/Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      ingredient: '',
      ingredients:[],
      example: ['Example Ingredient']
    };
  }

  onAdd = (event) => {
    event.preventDefault();
    //update ingredients and reset ingredient state
    this.setState(prevState => ({
      ingredients: [...prevState.ingredients, this.state.ingredient],
      ingredient: ''
    }));
  }

  onSubmit = (event) => {
    event.preventDefault();
    //redirect to recipes page
    this.props.history.push({
      pathname:'./Recipes',
      state: {
        ingredients: this.state.ingredients,
        username: this.props.location.state.user.username
      }
    });
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return(
      <div>
        {
          this.props.location.state === undefined ?
            <div className="Profile-error">
              <h2>You are not logged in. Please Signin or Signup.</h2>
              <div className="Profile-error-actions">
                <Link to='/login'><Button>Signup</Button></Link>
                <Link to='/signup'><Button>Signup</Button></Link>
              </div>
            </div> :
            <div className="Profile">
              <Header />
              <Link to='/login' className="Profile-logout">Logout</Link>
              <PageHeader>
                Welcome, {this.props.location.state.user.username}.
                <div>
                  <small>Enter your ingredients:</small>
                </div>
              </PageHeader>
              <form onSubmit={this.onAdd} className="Profile-form">
                <FieldGroup
                  type="text"
                  label="Ingredient"
                  name="ingredient"
                  value={this.state.ingredient}
                  onChange={this.onInputChange}
                />
                <div className="Profile-form-actions">
                  <Button type="submit" bsStyle="primary">Add</Button>
                  <Button bsStyle="success" onClick={this.onSubmit}>Submit</Button>
                </div>
              </form>
              <List items={this.state.ingredients.length ?
                this.state.ingredients : this.state.example}
                className="Profile-ingredients"
              />
              <Footer />
            </div>
        }
      </div>
    );
  }
}



export default withRouter(Profile);
