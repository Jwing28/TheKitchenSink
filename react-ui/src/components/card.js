import React from 'react';
import { Button, Col, Thumbnail } from 'react-bootstrap';
import './styles/card.css';

const Card = ({ recipeName, link, image }) => (
  <Col xs={6} md={4} className="card-container">
    <Thumbnail src={image} alt="Food Image" className="card-thumbnail-container">
      <h3 className="card-recipe-name">{recipeName || "Recipe Name"}</h3>
      <p className="card-actions">
        <Button bsStyle="info">Info</Button>
        <Button bsStyle="success">Save</Button>
      </p>
    </Thumbnail>
  </Col>
);

export default Card;

/*
  maybe the info button should be wrapped in a link ..

  <a href={link}><Button bsStyle="info">Info</Button></a>
*/
