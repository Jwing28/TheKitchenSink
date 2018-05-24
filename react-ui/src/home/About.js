import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/About.css';

const About = () => (
  <div className="About-container">
    <Jumbotron className="About-body">
      <h1>Welcome to TheKitchenSink!</h1>
      <p>
        I created TheKitchenSink because I've always enjoyed trying new recipes.
      </p>
      <p>
        I hope this application gives you some new ideas in the kitchen as
        well.
      </p>
      <div className="About-actions-container">
        <Button bsStyle="success" className="About-actions">
          <a href="https://github.com/Jwing28/TheKitchenSink">
            Project Repo
          </a>
        </Button>
        <Button bsStyle="primary" className="About-actions">
          <Link to='/'>Home</Link>
        </Button>
      </div>
    </Jumbotron>
  </div>
);

export default About;
