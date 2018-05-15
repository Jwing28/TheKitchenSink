import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import Card from './card';
import './styles/grid.css';

const grid = (props) => {
  return(
    !props.items.length ?
      <h3 className="Loading">Loading...</h3> :
      <Grid >
        <Row className="Grid-container">
          {props.items[0].slice(props.start,props.stop).map((item, idx) => (
            <Card
              key={item.recipe_id}
              recipe={item.title}
              image={item.image_url}
              source={item.source_url}
              username={props.username}
              updateFavorites={props.updateFavorites}
            />
          ))}
        </Row>
      </Grid>
  );
};

export default grid;
