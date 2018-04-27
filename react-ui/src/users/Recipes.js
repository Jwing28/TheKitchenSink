import React, { Component } from 'react';
import Grid from '../components/grid';
import Header from '../components/header';
import Footer from '../components/footer';

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
      <div>
        <Header />
        <Grid items={this.state.recipes} />
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
