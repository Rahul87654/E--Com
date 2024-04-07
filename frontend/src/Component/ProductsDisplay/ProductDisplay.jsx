import React, { useContext } from "react";
import "./productDisplay.css";
import star_icon from "./star_icon.png";
import star_dull from "./star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;
  const {addtoCart} = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <h1> {product.name}</h1>
        <div className="display-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="product-right-price-old">${product.old_price}</div>
          <div className="product-right-price-now">
            Now: ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, voluptatem eligendi consequatur eveniet voluptatum ea obcaecati odio ullam? Consequatur aut cum aperiam facere odio sequi nobis saepe, excepturi veritatis at.
        </div>
        <div className="productdisplay-right-size">
          <h1> Select Size </h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{
          addtoCart(product.id)
        }}> ADD TO CART </button>
        <p className="productdisplay-right-category"> <span>Category : </span> Women , Tshirt , Crop Top</p>
        <p className="productdisplay-right-category"> <span>Tags : </span> Modern , Latest  , Trendy </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
