import React, { Component } from 'react';
import { Button, Col, Label, Panel, Tooltip } from 'react-bootstrap';
import './styles/card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saved: false,
      data: {
        recipe: this.props.recipe,
        username: this.props.username
      }
    };
  }

//what you get back, response
//response body is not ready to be consumed
// return response.json()
//now in the next .then you can use what is provided
  componentDidMount() {
    const data = JSON.stringify(this.state.data);
    // if(this.state.data.recipe === 'Crash Hot Potatoes') {
    //   console.log("TEST", this.state.data.recipe)
    // }
    fetch('/recipeStatus', {
      method: 'PUT',
      body: data,
      headers: {
        'content-type':'application/json'
      }
    })
    .then(response => response.json())
      .then(recipeData => {
        if(recipeData.success) {

          this.setState({
            saved: !this.state.saved
          });
        } else {
          throw new Error('Could not find recipe in db.');
        }
      })
      .catch(error => {
        console.log(`Check recipe status failed: ${error}, ${this.state.data.recipe}`);
      })
  }

  onUnSave = () => {
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
  }
//???
  onSave = () => {
    const data = JSON.stringify(this.state.data);
    console.log('??')
    fetch('/save', {
      method: 'PUT',
      body: data,
      headers: {
        'content-type':'application/json'
      }
    })
    .then(response => response.json())
      .then(saveData => {
        if (saveData.success) {
          this.setState({
            saved: !this.state.saved
          });
        } else {
          throw new Error(`Status: ${saveData.status}`);
        }
      })
      .catch(error => {
        console.log(`Attempt to save recipe failed: ${error}`);
      });
  }

  render() {
    return(
      <Col xs={12} sm={6} md={4} lg={3} className="card-container">
        <Panel bsStyle="primary">
          <Panel.Heading>
            <Panel.Title componentClass="h3" className="card-recipe-name">
              {this.props.recipe || "Recipe"}
            </Panel.Title>
          </Panel.Heading>
          <img src={this.props.image} alt="" className="card-thumbnail-container"  />
            <p className="card-actions">
              <a href={this.props.source} target="_blank">
                <Button bsStyle="info">
                  Source
                </Button>
              </a>
              {
                this.state.saved ?
                <h4><Label onClick={this.onUnSave}>UnSave</Label></h4>
                :<Button bsStyle="success" onClick={this.onSave}>Save</Button>
              }
            </p>
        </Panel>
      </Col>
    );
  }
}

export default Card;
