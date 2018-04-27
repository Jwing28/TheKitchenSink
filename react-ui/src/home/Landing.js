import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import './styles/Landing.css';

const Landing = () => (
  <div className="Landing-container">
    <Header />
      <div className="Landing-content">
        <h1>
          TheKitchenSink
        </h1>
        <div className="Landing-actions">
          <Link to='/login'><button className="Landing-buttons">Signin</button></Link>
          <Link to='/signup'><button className="Landing-buttons">Signup</button></Link>
        </div>
      </div>
    <Footer />
  </div>
);
export default Landing;
