import React, {createContext, useState} from "react";
import all_product from "../Component/Assests/all_product";

export const ShopContext = createContext(null);
const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        
        cart[index] =0;
    }
    return cart;
}
 const  ShopContextProvider = (props) =>
{  const [cartItems ,setCartitems] = useState(getDefaultCart());
  
    const addtoCart =(itemId) =>{
        setCartitems((prev)=>({...prev,[itemId]: prev[itemId]+1}))
        console.log(cartItems)
    }
    const removefromCart =(itemId) =>{
        setCartitems((prev)=>({...prev,[itemId]: prev[itemId]-1}))
    }
    const getTotalCartAmount = () =>{
        let totalamount = 0;
        for(const item in cartItems){
            if(cartItems[item] >0)
            {
                let iteminfo = all_product.find((product)=>product.id===Number(item))
                totalamount+= iteminfo.new_price *cartItems[item];
            }
           
        }
        return totalamount;
    }
    const getTotalcartitem = () => {
        let total = 0;
        if (cartItems && typeof cartItems === 'object') {
            for (const item in cartItems) {
                if (cartItems[item] > 0) {
                    total += cartItems[item];
                }
            }
        } else {
            console.error('cartItems is not properly initialized or is not an object.');
        }
        return total;
    }
    
    
    const contextValue = { getTotalcartitem,getTotalCartAmount, all_product,cartItems,addtoCart,removefromCart}
    return(
        <ShopContext.Provider value ={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;