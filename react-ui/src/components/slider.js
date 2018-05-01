import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './styles/slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  toggleClass = () => {
    console.log('check');
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return(
      <Panel className={this.state.clicked ? 'Slider Slider-clicked' : 'Slider'} onClick={this.toggleClass}>
        <Panel.Heading className="Slider-heading">Top10</Panel.Heading>
        <Panel.Body>
          <ol>
            <li>Food item</li>
            <li>Food item</li>
            <li>Food item</li>
            <li>Food item</li>
            <li>Food item</li>
            <li>Food item</li>
            <li>Food item</li>
            <li>Food item</li>
            <li>Food item</li>
            <li>Food item</li>
          </ol>
        </Panel.Body>
      </Panel>
    );
  }
}
export default Slider;

//this.state.clicked ? 'Slider-list Slider-list-clicked' : 'Slider-list'
