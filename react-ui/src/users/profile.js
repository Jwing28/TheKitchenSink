import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '../components/grid';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = { user:{}, ingredients:[]};
  }

  componentDidMount() {
    //go get the api data to render
    let apiKey = 'c25afe65342f2138c001fcb789db1059';
    //http://food2fork.com/api/search
    //q=comma separated strings of ingredients
    //sort=r most popular recipes with these ingredients
    //max 30 results returned
    let url = `http://cors-proxy.htmldriven.com/?url=http://food2fork.com/api/search?key=c25afe65342f2138c001fcb789db1059&sort=r&q=shredded%20chicken`;
    //let ingredients = this.state.ingredients.map((ingredient) => `${}`)
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(recipes => {
        console.log('data??', JSON.parse(recipes.body))
      })
      .catch(error => {
        console.log(`Error retreiving recipe data ${error}`)
      });
  }

  render() {
    //this.props.location.state.user.username or favorites
    return(
      <div>
        Welcome {this.props.location.state.user.username} !

      </div>
    );
  }
}

export default withRouter(Profile);
