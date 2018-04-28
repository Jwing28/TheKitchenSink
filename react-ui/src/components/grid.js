import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import Card from './card';
import './styles/grid.css';

const grid = (props) => (
    !props.items.length ?
      <h3 className="Loading">Loading...</h3> :
      <Grid >
        <Row className="Grid-container">
          {props.items[0].recipes.map((item, idx) => (
            <Card
              key={idx}
              recipe={item.title} 
              image={item.image_url}
              source={item.source_url}
              username={props.username}
            />
          ))}
        </Row>
      </Grid>
);

export default grid;
