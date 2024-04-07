import React from 'react'
import './Offers.css'
import image3 from '../Assests/image3.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1> Exclusive </h1>
        <h1>  Offers For You </h1>
        <p> Only on Best Sellers Products </p>
        <button> Check Now </button>
      </div>
      <div className="offers-right">
             <img src = {image3} alt="" />
      </div>
    </div>
  )
}

export default Offers
