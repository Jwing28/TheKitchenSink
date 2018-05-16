import React, { Component } from 'react';
import { Button, Glyphicon, Panel } from 'react-bootstrap';
import './styles/slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      list: []
    };
  }

  toggleClass = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  componentWillReceiveProps(nextProps) {
    console.log('inside componentWillReceiveProps', nextProps);
    this.setState({ list: nextProps.list });
  }

  render() {
    return(
      <Panel className={this.state.expanded ? 'Slider expanded' : 'Slider'} onClick={this.toggleClass}>
        <Panel.Heading className="Slider-heading">
          <Glyphicon glyph="heart" />
        </Panel.Heading>
        <Panel.Body className={this.state.expanded ? 'Slider-list Slider-list-expanded' : 'Slider-list'}>
          <ol>
            {this.state.list.length ?
              this.state.list.map((item, idx) => (
                <li key={idx}>
                  {item}&nbsp;
                  <Button
                    bsStyle="danger"
                    className="Slider-delete"
                    onClick={() => this.props.removeFavorite(item, this.props.username)}
                  >x</Button>
                </li>
              ))
              : null
          }
          </ol>
        </Panel.Body>
      </Panel>
    );
  }
}
export default Slider;

/*

state.data: {
  recipe: this.props.recipe,
  username: this.props.username
}

1. each item in this.state.list.map.. is the recipe name.
2. username = this.props.username - already being passed from recipes.

const data = JSON.stringify(this.state.data);

fetch('recipe',{
  method: 'DELETE',
  body: data,
  headers: {
    'content-type':'application/json'
  }
})
.then(response => {
  this.setState({
    saved: !this.state.saved
  });
})
.catch(error => {
  console.log(`Attempted to delete recipe failed: ${error}`);
});

*/
