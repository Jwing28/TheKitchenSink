import React from 'react';
import { Navbar, Panel  } from 'react-bootstrap';
import './styles/footer.css';

const footer = () => (
  <footer className="Footer">
    <section className="Footer-links">
      <a href="#">About</a>
    </section>
    <section className="Footer-links">
      <a href="#">Portfolio</a>
    </section>
    <section className="Footer-links">
      <a href="#">LinkedIn</a>
    </section>
    <section className="Footer-links">
      <a href="#">Twitter</a>
    </section>
    <section className="Footer-author">
      <address><a href="https://github.com/jwing28">Created by Jonathan Lee</a></address>
    </section>
  </footer>
);

export default footer;
