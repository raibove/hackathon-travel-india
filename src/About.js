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
          db.map((data, index) => (
            <section className="ones" key={index} style={{backgroundImage:`url(${imgu})`}}>
              <div  className="snap-container">
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
        )):
        type==="text"?
        <section className="ones">
          <p >
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
        </section>
          :
          <>
          </>
            }
      </div>
    </div>
  );
};

export default AboutPage;
