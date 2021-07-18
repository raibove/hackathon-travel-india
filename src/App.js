import React, {useEffect} from 'react';
import './style.css';
import Nav from './Nav.js';
import About from './About.js';
import Extra from './Extra.js';
import Landing from './Landing'; 

export default function App() {  
  return (
    <div className="app-scroll">
      <div className="ab">
        <Landing/>
      </div>
      <div className="ab">
      <About type="text" />
      </div>
      <div className="ab">
      <About id="about" type="place"/>
      </div>

      <Extra id="popular" />
      <Extra id="map" />
      <Extra id="contact" />
    </div>
  );
}
