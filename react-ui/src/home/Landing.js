import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div>
    <div><Link to='/login'>Login</Link></div>
    <div><Link to='/signup'>Signup</Link></div>    
  </div>
);
export default Landing;
