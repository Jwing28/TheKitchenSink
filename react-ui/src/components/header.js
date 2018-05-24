import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './styles/header.css';

const header = () => (
  <Navbar inverse collapseOnSelect className="Header">
    <Navbar.Header>
      <Navbar.Brand className="Header-brand">
        <img alt="applogo" src="https://png.icons8.com/cotton/50/000000/restaurant.png" />
        <a href="https://arcane-bayou-17022.herokuapp.com/">TheKitchenSink</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          <Link to='/About'>About</Link>
        </NavItem>
        <NavItem eventKey={2} href="#">
          Portfolio
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default header;
