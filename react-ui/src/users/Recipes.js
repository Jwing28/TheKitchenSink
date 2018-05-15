import React, { Component } from 'react';
import Grid from '../components/grid';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Slider from '../components/slider';
import { Pager } from 'react-bootstrap';
import './styles/Recipes.css';

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: this.props.location.state.ingredients,
      favorites:[],
      recipes: [],
      result: null,
      recipeLength:{
        start: 0,
        stop: 9
      }
    };
  }

  componentDidMount() {
    const data = JSON.stringify({
      username: this.props.location.state.username
    });

    //retrieve user's favorites
    fetch('/favorites', {
      method: 'PUT',
      body: data,
      headers: {
        'content-type':'application/json'
      }
    })
      .then(response => {
        return response.json()
      })
      .then(favoritesData => {
        console.log('favoritesData', favoritesData);
        this.setState({ favorites: favoritesData.favorites });
        const apiKey = 'c25afe65342f2138c001fcb789db1059';
        const proxy = 'https://cors.now.sh/';
        const ingredients = this.state.ingredients.join('%20');
        const url = proxy + `https://food2fork.com/api/search?key=${apiKey}&sort=r&q=${ingredients}`;

        return fetch(url);
      })
      .then(response => {
        return response.json();
      })
      .then(recipesData => {
        const recipeResults = recipesData.recipes;
        console.log('recipe results from db', recipeResults);
        this.setState({recipes: [...this.state.recipes, recipeResults]});
      })
      .catch(error => console.error(`Error getting favorites:${error}`));
  }

  updateFavorites = () => {
    const data = JSON.stringify({
      username: this.props.location.state.username
    });

    fetch('/favorites', {
      method: 'PUT',
      body: data,
      headers: {
        'content-type':'application/json'
      }
    })
      .then(response => {
        return response.json();
      })
      .then(favoritesData => {
        //not getting back
        console.log('re-loaded favorites', favoritesData)
        if(favoritesData.favorites) {
          this.setState({ favorites: favoritesData.favorites });
        } else {
          throw new Error(favoritesData.error);
        }
      })
      .catch(error => console.error(`Error getting favorites:${error}`));
  }

  updateRecipeNext = () => {
    let updatedRecipeLength;
    if(this.state.recipeLength.stop + 9 <= this.state.recipes[0].length) {
      updatedRecipeLength = this.state.recipeLength;
      updatedRecipeLength.start += 9;
      updatedRecipeLength.stop += 9;
      this.setState(updatedRecipeLength);
    } else {
      updatedRecipeLength = this.state.recipeLength;
      updatedRecipeLength.start += 9;
      updatedRecipeLength.stop = this.state.recipes[0].length;
      this.setState(updatedRecipeLength);
    }
  }

  updateRecipePrevious = () => {
    let updatedRecipeLength;
    if(this.state.recipeLength.stop === this.state.recipes[0].length) {
      updatedRecipeLength = this.state.recipeLength;
      //calculation necessary to show 9 cards when previous
      //is selected upon reaching last "page" of grid
      updatedRecipeLength.stop =
        this.state.recipes[0].length -
        (this.state.recipeLength.stop - this.state.recipeLength.start);
      updatedRecipeLength.start -= 9;
      this.setState(updatedRecipeLength);
    } else {
      updatedRecipeLength = this.state.recipeLength;
      updatedRecipeLength.start -= 9;
      updatedRecipeLength.stop -= 9;
      this.setState(updatedRecipeLength);
    }
  }

  renderRecipePages = () => {
    if(!this.state.recipeLength.start) {
      return (<Pager.Item onClick={this.updateRecipeNext}>Next</Pager.Item>);
    } else if(this.state.recipeLength.stop === this.state.recipes[0].length) {
      return (<Pager.Item onClick={this.updateRecipePrevious}>Previous</Pager.Item>);
    } else {
      return([
        <Pager.Item key={'previous'} onClick={this.updateRecipePrevious}>Previous</Pager.Item>,
        <Pager.Item key={'next'} onClick={this.updateRecipeNext}>Next</Pager.Item>
      ]);
    }
  }

  render() {
    console.log('start', this.state.recipeLength.start);
    console.log('stop', this.state.recipeLength.stop);
    return(
      <div className="Recipes">
        <Header />
          <Link to='/login' className="Recipes-logout">Logout</Link>
          <div className="Recipes-body">
            <Slider list={this.state.favorites} username={this.props.location.state.username} />
            <Grid
              className={this.state.recipes.length ? 'Recipes-grid' : 'Recipes-loading'}
              items={this.state.recipes}
              username={this.props.location.state.username}
              updateFavorites={() => this.updateFavorites()}
              start={this.state.recipeLength.start}
              stop={this.state.recipeLength.stop}
            />
          </div>
          <Pager className="Recipes-pages">
            {this.renderRecipePages()}
          </Pager>
        <Footer />
      </div>
    );
  }
}

export default Recipes;
