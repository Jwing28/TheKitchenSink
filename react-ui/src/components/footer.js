import React from 'react';
import './styles/footer.css';

const footer = () => (
  <footer className="Footer">
    <section className="Footer-links">
      <a>About</a>
    </section>
    <section className="Footer-links">
      <a>Portfolio</a>
    </section>
    <section className="Footer-links">
      <a href="https://www.linkedin.com/in/jwingz/">LinkedIn</a>
    </section>
    <section className="Footer-links">
      <a href="https://twitter.com/JonWingz">Twitter</a>
    </section>
    <section className="Footer-author">
      <address><a href="https://github.com/jwing28">Created by Jonathan Lee</a></address>
    </section>
  </footer>
);

export default footer;
