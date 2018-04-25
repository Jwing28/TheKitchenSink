import React, { Component } from 'react';
import Grid from '../components/grid';

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: this.props.location.state.ingredients,
      recipes: [],
      result: null
    };
  }
  componentDidMount() {
    let apiKey = 'c25afe65342f2138c001fcb789db1059';
    let url = `http://cors-proxy.htmldriven.com/?url=http://food2fork.com/api/search?key=${apiKey}&sort=r&q=shredded%20chicken`;
    //let ingredients = this.state.ingredients.map((ingredient) => `${}`)
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(response => {
        const recipeResults = JSON.parse(response.body);
        this.setState({
          recipes: [...this.state.recipes, recipeResults]
        });
      })
      .catch(error => {
        console.log(`Error retreiving recipe data ${error}`)
      });
  }

  render() {
    return(
      <Grid items={this.state.recipes} />
    );
  }
}

export default Recipes;

/*

Going to need this:

pass up to 5 ingredients user enters to results page
use these ingredients in the api call that you will make below

componentDidMount() {
  let apiKey = 'c25afe65342f2138c001fcb789db1059';
  let url = `http://cors-proxy.htmldriven.com/?url=http://food2fork.com/api/search?key=c25afe65342f2138c001fcb789db1059&sort=r&q=shredded%20chicken`;
  //let ingredients = this.state.ingredients.map((ingredient) => `${}`)
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(response => {
      let recipes = response.body.recipes
      //this.setState({ recipes: JSON.parse(response.body) })
      //each recipe has:
        //image_url
        //title
          //may need for scraping
          //publisher
          //publisher_url
      console.log('data??', JSON.parse(response.body))
    })
    .catch(error => {
      console.log(`Error retreiving recipe data ${error}`)
    });
}
*/
