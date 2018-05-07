import React, { Component } from 'react';
import Grid from '../components/grid';
import { Link } from 'react-router-dom';
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
      .then(response => response.json())
      .then(favoritesData => {
        console.log('after retreive favorites', favoritesData);
        this.setState({ favorites: favoritesData.favorites });
        let apiKey = 'c25afe65342f2138c001fcb789db1059';
        let proxy = 'https://cors.now.sh/';
        let url = proxy + `https://food2fork.com/api/search?key=${apiKey}&sort=r&q=shredded%20chicken`;

        return fetch(url);
      })
      .then(response => {
        console.log('chk response', response);
        return response.json();
      })
      .then(recipesData => {
        const recipeResults = recipesData.recipes;
        this.setState({recipes: [...this.state.recipes, recipeResults]});
      })
      .catch(error => console.error(`Error getting favorites:${error}`));
  }

  updateFavorites = () => {
    console.log('inside updateFavorites');
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
        console.log('response to update favorites? ', response);
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

  render() {
    return(
      <div className="Recipes">
        <Header />
          <Link to='/login' className="Recipes-logout">Logout</Link>
          <div className="Recipes-body">
            <Slider list={this.state.favorites} username={this.props.location.state.username} />
            <Grid
              items={this.state.recipes}
              username={this.props.location.state.username}
              updateFavorites={() => this.updateFavorites()}
            />
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
