import React from 'react';
import { Button, Col, Panel } from 'react-bootstrap';
import './styles/card.css';

const Card = ({ recipeName, link, image, source }) => (
  <Col xs={12} sm={6} md={4} lg={3} className="card-container">
    <Panel bsStyle="primary">
      <Panel.Heading>
        <Panel.Title componentClass="h3" className="card-recipe-name">{recipeName || "Recipe Name"}</Panel.Title>
      </Panel.Heading>
      <img src={image} alt="" className="card-thumbnail-container"  />
        <p className="card-actions">
          <a href={source} target="_blank"><Button bsStyle="info">Source</Button></a>
          <Button bsStyle="success">Save</Button>
        </p>
    </Panel>
  </Col>
);

export default Card;

/*
  maybe the info button should be wrapped in a link ..

  <a href={link}><Button bsStyle="info">Info</Button></a>
*/
