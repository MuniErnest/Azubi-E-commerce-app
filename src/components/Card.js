import React from 'react'
import './Card.css'

function Card(props) {
  return (
      <div className='card-container'>
        <div className='image-container'>
            <img src={props.img}/>
        </div>
        <div className='card-content'>
            <div className='card-title'>
            <h2>{props.product}</h2>
        </div>
        <div className='card-body'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Amet quamqui</p>
        </div>
        </div>

        <div className='btn'>
          <button>Place order</button>
          <p>{props.price}</p>
        </div>
    </div>
  )
}

export default Card

