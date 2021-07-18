import React, {useEffect} from 'react';
import './style.css';
import Parallax, { Layer, AppearLayer } from "react-parallax-scroll";

const Landing = ()=>{
  return(
    <div style={{height:'100vh'}}>
    <div className="landing">
      <p className="title">Incredible India</p>
    <Parallax
    >
        <Layer
          className="taj-mahal"
          settings={{ speed: -0.25, type: ["translateY"] }}
        >
          <img src="https://purepng.com/public/uploads/large/taj-mahal-skr.png" />
        </Layer>
    </Parallax>
    </div>
    </div>
  )
}
export default Landing;