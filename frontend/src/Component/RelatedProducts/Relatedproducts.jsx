import React from 'react';
import './Realated.css';
import data_product from '../Assests/data'
import Item from '../Item/Item';
const Relatedproducts = () => {
  return (
    <div className='relatedproducts'>
      <h1> RELATED PRODUCTS</h1>
      <hr />
      <div className="realtedproducts-item">
        {
            data_product.map((item,i)=>{
                return  < Item key ={i} id ={item.id} name={item.name} image={item.image} new_price ={item.new_price} old_price ={item.old_price} />
            })
        }
      </div>
    </div>
  )
}

export default Relatedproducts
