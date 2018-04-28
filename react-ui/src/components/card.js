import React, { Component } from 'react';
import { Button, Col, Panel } from 'react-bootstrap';
import './styles/card.css';

class Card extends Component {
  onSave = () => {
    const data = JSON.stringify({
      recipe: this.props.recipe,
      username: this.props.username
    });

    fetch('/save', {
      method: 'PUT',
      body: data,
      headers:{
        'content-type':'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        console.log('result: ', response);
      })
      .catch(e => {
        console.log(`API call failed: ${e}`);
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
              <Button bsStyle="success" onClick={this.onSave}>
                Save
              </Button>
            </p>
        </Panel>
      </Col>
    );
  }
}

export default Card;

//save - needs to do a post request to mongo db
//db - need an update route to push the recipe name to favorites
//pass the username and the recipe on request
