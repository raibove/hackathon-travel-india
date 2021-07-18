import React, {useEffect} from 'react';
import './style.css';
import Nav from './Nav.js';
import About from './About.js';
import Extra from './Extra.js';
import Landing from './Landing'; 
import C from "./Card"
export default function App() {  

  function changeBackground(iy) {
    console.log('e');
  }


  function removeBackground(){
    console.log('e');

  }
  return (
    <>
    <C title="csc" description="vsv" img="ds" removeBackground={removeBackground} changeBackground={changeBackground}/>
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

    </div>
    </>
  );
}
