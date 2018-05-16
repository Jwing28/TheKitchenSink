import React, { Component } from 'react';
import { Button, Col, Label, Panel, Tooltip } from 'react-bootstrap';
import { cleanString, limitString } from '../lib/formats/data.utils';
import './styles/card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        recipe: this.props.recipe,
        username: this.props.username
      },
      saved: false,
      tooltipVisible:false
    };
  }

  componentDidMount() {
    const data = JSON.stringify(this.state.data);

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
        //console.log(`Check recipe status failed: ${error}, ${this.state.data.recipe}`);
      })
  }

  onUnSave = () => {
    const data = JSON.stringify(this.state.data);
    console.log('in onUnSave');
    this.props.updateFavorites();
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

  onSave = () => {
    const data = JSON.stringify(this.state.data);
    console.log('card onSave', data);
    fetch('/save', {
      method: 'PUT',
      body: data,
      headers: {
        'content-type':'application/json'
      }
    })
    .then(response => response.json())
      .then(saveData => {
        //save favorite
        if (saveData.success) {
          this.setState({
            saved: !this.state.saved
          });
          //invoke callback to re-render favorites slider
          console.log('card onSave');
          this.props.updateFavorites();
        } else {
          throw new Error(`Status: ${saveData.status}`);
        }
      })
      .catch(error => {
        console.log(`Attempt to save recipe failed: ${error}`);
      });
  }

  render() {
    console.log(this.state.tooltipVisible);
    return(
      <Col xs={12} sm={6} md={4} className="card-container">
        <Panel bsStyle="primary">
          <Panel.Heading
            onMouseEnter={() => this.setState({ tooltipVisible: true})}
            onMouseLeave={() => this.setState({ tooltipVisible: false})}>
            <Panel.Title componentClass="h3" className="card-recipe-name">
              {limitString(cleanString(this.state.data.recipe)) || "Recipe"}
            </Panel.Title>
          </Panel.Heading>
          <div className="card-thumbnail-container">
            <img src={this.props.image} alt="" className="card-thumbnail"/>
          </div>
            <p className="card-actions">
              {
                this.state.tooltipVisible ? this.state.data.recipe : null
              }              
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
