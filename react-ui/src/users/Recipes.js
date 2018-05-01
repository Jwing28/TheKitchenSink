import React, { Component } from 'react';
import Grid from '../components/grid';
import Header from '../components/header';
import Footer from '../components/footer';
import Slider from '../components/slider';

import './styles/Recipes.css';

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: this.props.location.state.ingredients,
      favorites:[],
      recipes: [],
      result: null
    };
  }

  componentDidMount() {

    // fetch(url)
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(apiData => {
    //     const recipeResults = JSON.parse(apiData.body);
    //     this.setState({recipes: [...this.state.recipes, recipeResults]});
    //
    //     return fetch('/favorites')
    //   })
    //   .then(favoritesData => {
    //     console.log('favorites data', favoritesData);
    //   })
    //   .catch(error => {
    //     console.error(`Error getting recipes:${error}`);
    //   });
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
        this.setState({ favorites: favoritesData.favorites });

        let apiKey = 'c25afe65342f2138c001fcb789db1059';
        let url = `http://cors-proxy.htmldriven.com/?url=http://food2fork.com/api/search?key=${apiKey}&sort=r&q=shredded%20chicken`;
        return fetch(url);
      })
      .then(response => response.json())
      .then(recipesData => {
        const recipeResults = JSON.parse(recipesData.body);
        this.setState({recipes: [...this.state.recipes, recipeResults]});
      })
      .catch(error => console.error(`Error getting favorites:${error}`));
  }

  render() {
    return(
      <div className="Recipes">
        <Header />
          <div className="Recipes-body">
            <Slider list={this.state.favorites} />
            <Grid items={this.state.recipes} username={this.props.location.state.username} />
          </div>
        <Footer />
      </div>
    );
  }
}

export default Recipes;

/*

Going to need this:

pass up to 5 ingredients user enters to results page
use these ingredients in the api call that you will make below
*/
