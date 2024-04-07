import React, { useContext } from "react";
import "./Cart.css";
import { ShopContext } from "../../Context/ShopContext";
import remove from './cart_cross_icon.png'

const CartItems = () => {
  const { all_product, cartItems, removefromCart, addtoCart } = useContext(ShopContext);
 const {getTotalCartAmount} = useContext(ShopContext);
  return (
    <div>
      <h2 className="cart-title">Your Cart</h2>
      <div className="cartitemsformat">
        <hr />
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div className="cart-item" key={e.id}>
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <button className="cartitems-quantity" onClick={() => addtoCart(e.id)}>+</button>
                <img src={remove} className="remove-icon" onClick={() => removefromCart(e.id)} alt="" />
                <p>${e.new_price * cartItems[e.id]}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1> Cart Total </h1>
          <div>
            <div className="cartitems-total-item">
              <p>Sub Total </p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p> Shipping Fee </p>
              <p> Free </p>
            </div>
            <hr />
            <div className="cartitems-total-item"
            >
              <h3> Total</h3>
              <h3>${getTotalCartAmount()} </h3>
            </div>
          </div>
          <button> Proceed to Checkout </button>
        </div>
        <div className="cartitems-promocode">
          <p> If You have a promo Code , Enter it Here  </p>
          <div className="cartitem-promo-box">
            <input type="text" placeholder="Enter Promo code here " />
            <button> Submit </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
