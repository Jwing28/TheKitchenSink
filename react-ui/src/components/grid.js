import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import Card from './card';
import './styles/grid.css';
//ex.
//let array = [{ recipeName: "PB + J", image:"http://via.placeholder.com/202x150" },{ recipeName: "Tuna Casserole", image:"http://via.placeholder.com/202x150" },{ recipeName: "Spinach Omelete", image:"http://via.placeholder.com/202x150" }]

const grid = (props) => (
  <Grid >
    <Row className="Grid-container">
      {props.recipes.map((recipe) => (
        <Card recipeName={recipe.recipeName} link={''} image={recipe.image} />
      ))}
    </Row>
  </Grid>
);

export default grid;


/*

  link should be a link to the recipe page on YOUR site...how are you going to do this?

<Card recipeName={"Shrimp Scampi"} link={''} image={"http://via.placeholder.com/202x150"} />
<Card recipeName={"Rice and Beans"} link={''} image={"http://via.placeholder.com/202x150"} />
<Card recipeName={"Fettucini Alfredo"} link={''} image={"http://via.placeholder.com/202x150"} />

*/
