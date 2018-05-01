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

  componentDidMount() {
    const data = JSON.stringify(this.state.data);

    fetch('/recipeStatus', {
      method: 'PUT',
      body: data,
      headers: {
        'content-type':'application/json'
      }
    })
      .then(response => {
        if(response.success) {
          console.log('?',this.state.saved);
          this.setState({
            saved: !this.state.saved
          });
        }
      })
      .catch(error => {
        console.log(`Attempt to check recipe status failed: ${error}`);
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
    //commented out for testing
    // this.setState({ saved: !this.state.saved });
  }

  onSave = () => {
    const data = JSON.stringify(this.state.data);

    fetch('/save', {
      method: 'PUT',
      body: data,
      headers: {
        'content-type':'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }

        this.setState({
          saved: !this.state.saved
        });
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

//save - needs to do a post request to mongo db
//db - need an update route to push the recipe name to favorites
//pass the username and the recipe on request
