import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const List = (props) => (
  <ListGroup>
    {props.items.map((item, idx) => (
      <ListGroupItem key={idx}>{`${idx + 1}. ${item}`}</ListGroupItem>
    ))}
  </ListGroup>
);

export default List;
