/* eslint-disable react/jsx-no-undef */
import "./Navbar.css";
import logo from "../Assests/ecommerce.svg";
import cart_icon from "../Assests/cart.svg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
    const [menu, setmenu] = useState('shop');
    const { getTotalcartitem } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img className="img-fluid" src={logo} alt="" />
        <p> GlamMart </p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=> {setmenu('shop')} }> <Link style={{textDecoration: "none"}} to ='/'> Shop </Link>{menu==='shop'?<hr/> : <></>} </li>
        <li  onClick={()=>{setmenu('mens')} }> <Link  style={{textDecoration: "none"}} to ='/mens'> Mens </Link> {menu==='mens'?<hr/> : <></>}</li>
        <li  onClick={()=> {setmenu('womens')}}>  <Link  style={{textDecoration: "none"}} to ='/womens'> Womens </Link>{menu==='womens'?<hr/> : <></>} </li>
        <li onClick={()=>{setmenu('kids')} } >  <Link  style={{textDecoration: "none"}} to ='/kids'> Kids </Link>{menu==='kids'?<hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link  style={{textDecoration: "none"}} to ='/login'>  <button> LOGIN </button> </Link>
        <Link  style={{textDecoration: "none"}} to ='/cart'>  <img className="img-fluid" src={cart_icon} alt="" /></Link>
       
        <div className="nav-cart-count">{getTotalcartitem()}</div>
      </div>
    </div>
  );
};

export default Navbar;
