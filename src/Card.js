import React from 'react'
import "./Card.css"

const Card = ({img, title, description, changeBackground, removeBackground})=>{
  return(
    <div className="card" onMouseOver={e=>changeBackground(img)} onMouseOut={e=>removeBackground()}>
    <img src={img} />
    <div className="card-body">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
  )
}
export default Card;