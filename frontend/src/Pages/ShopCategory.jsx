import React, { useContext } from "react";
import "../Pages/CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Component/Item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shop-category-banner"
        src={props.banner}
        alt="Banner"
        style={{ width: "100%" }} 
      />
      <div className="shopcategory-indexsort">
        <p>
          <span> Showing 1-12</span> Out of 36  Products
        </p>
        <div className="shop-category-sort">
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return< Item key ={i} id ={item.id} name={item.name} image={item.image} new_price ={item.new_price} old_price ={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
