import React from 'react';
import { Button, Col, Panel } from 'react-bootstrap';
import './styles/card.css';

const Card = ({ recipeName, link, image }) => (
  <Col xs={6} md={4} className="card-container">
    <Panel bsStyle="primary">
      <Panel.Heading>
        <Panel.Title componentClass="h3" className="card-recipe-name">{recipeName || "Recipe Name"}</Panel.Title>
      </Panel.Heading>
      <img src={image} alt="Food Image" className="card-thumbnail-container" height={200} width={200} />
        <p className="card-actions">
          <Button bsStyle="info">Info</Button>
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
