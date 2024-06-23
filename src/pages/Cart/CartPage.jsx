import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
export const CartPage = () => {
  //The cartList is ready to use 
const {cartList} = useContext(CartContext)
  return( 
  <div>CartPage</div>)
};
