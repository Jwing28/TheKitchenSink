import React, { Component } from 'react';
import { Button, Col, Thumbnail } from 'react-bootstrap';
import './styles/card.css';

const Card = (props) => (
  <Col xs={6} md={4} className="card-container">
    <Thumbnail src="http://via.placeholder.com/202x150" alt="Food Image" className="card-thumbnail-container">
      <h3 className="card-recipe-name">{props.recipeName || "Recipe Name"}</h3>
      <p className="card-actions">
        <Button bsStyle="info">Info</Button>
        <Button bsStyle="success">Save</Button>
      </p>
    </Thumbnail>
  </Col>
);

export default Card;



/*
  - Header
      -> background image??? - or just generic food picture
  - space

  -> lower section
    -> left button (Info) right button (Favorite)

    -> Favorites is going to save to user's favorites
    ->Once done - button will flip to a label with a
      check mark glyphicon

    ->Details will redirect user to a page with many details about them.

just pass in col size.

parent using card component should already have

**SOMETHING LIKE THIS.>>>
<Grid>
  <Row>
    {this.props.recipes((recipe) => (
      <Card recipe={recipe} />
    ))}
  </Row>
</Grid>



*/
