import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import Card from './card';
import './styles/grid.css';
//ex.
//let array = [{ recipeName: "PB + J", image:"http://via.placeholder.com/202x150" },{ recipeName: "Tuna Casserole", image:"http://via.placeholder.com/202x150" },{ recipeName: "Spinach Omelete", image:"http://via.placeholder.com/202x150" }]

const grid = (props) => {
    return !props.items.length ?
      <h3>Loading...</h3> :
      <Grid >
        <Row className="Grid-container">
          {props.items[0].recipes.map((item, idx) => (
            <Card key={idx} recipeName={item.title} link={''} image={item.image_url} />
          ))}
        </Row>
      </Grid>
};

export default grid;


/*

  link should be a link to the recipe page on YOUR site...how are you going to do this?

<Card recipeName={"Shrimp Scampi"} link={''} image={"http://via.placeholder.com/202x150"} />
<Card recipeName={"Rice and Beans"} link={''} image={"http://via.placeholder.com/202x150"} />
<Card recipeName={"Fettucini Alfredo"} link={''} image={"http://via.placeholder.com/202x150"} />

*/
