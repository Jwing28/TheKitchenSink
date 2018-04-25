import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import List from '../components/list';
import { Button, PageHeader } from 'react-bootstrap';
import FieldGroup from '../components/fieldgroup';
import './styles/Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = { user:{}, ingredient: '', ingredients:[], limit: 5, };
  }

  onSubmit = (event) => {
    event.preventDefault();
    if(this.state.ingredients.length === this.state.limit) {

    }
    this.setState(prevState => ({
      ingredients: [...prevState.ingredients, this.state.ingredient],
      ingredient: ''
    }));
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    //this.props.location.state.user.username or favorites
    const example = ["Ingredient","Ingredient"];
    return(
      <div className="Profile-container">
        <PageHeader>
          Welcome, {this.props.location.state.user.username}.
          <div>
            <small>Enter your ingredients (max 5):</small>
          </div>
        </PageHeader>
        <form onSubmit={this.onSubmit} className="Profile-form">
          <FieldGroup
            type="text"
            label="Ingredient"
            name="ingredient"
            value={this.state.ingredient}
            onChange={this.onInputChange}
          />
          <div className="Profile-form-actions">
            <Button type="submit" bsStyle="primary">Add</Button>
            <Button bsStyle="success">Submit</Button>
          </div>
        </form>
        <List items={this.state.ingredients.length ?
          this.state.ingredients : example}
          className="Profile-ingredients"
        />
      </div>
    );
  }
}

export default withRouter(Profile);
