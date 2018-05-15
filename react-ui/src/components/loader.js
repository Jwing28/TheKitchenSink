import React from 'react';
import './styles/loader.css';

export const Loader = () => (
  <div className="Loader-container">
    <div className="load-text">
      Refilling the glass...
    </div>
    <div className="glass">
      <div className="rim"></div>
      <div className="juice"></div>
    </div>
  </div>
);
