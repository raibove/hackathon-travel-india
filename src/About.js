import React, {useState} from 'react';
import './about.css';
import db from './db';
import Card from './Card';
const AboutPage = ({ id, type }) => {

  const [imgu,setImgu]=useState("");
  function changeBackground(iy) {
    console.log('e');
    setImgu(iy)
  }


  function removeBackground(){
    setImgu("")
  }
  return (
    <div id={id} style={{ minHeight: '50vh', color: '#f34' }}>
      <div className="container" >
        {type==="place"?
        <>
          { db.map((data, index) => (
            <section className="ones" key={index} style={{backgroundImage:`url(${imgu})`}}>
              <div style={{ display: 'flex' }} className="snap-container">
                <h1 className="snap-title">{data.place_name}</h1>
                <p className="snap-despcription">{data.description}</p>
              </div>
              <div className="card-container">
                {data.attractions.map((d, i) => (
                  <Card
                    key={i}
                    img={d.url}
                    title={d.name}
                    description={d.description}
                    changeBackground={changeBackground}
                    removeBackground={removeBackground}
                  />
                ))
            }
            </div>
          </section>
        ))}
         </>
              :
              <>
              </>
            }
      </div>
    </div>
  );
};

export default AboutPage;
