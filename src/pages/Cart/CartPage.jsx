import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
export const CartPage = () => {
const {cartList} = useContext(CartContext)
  console.log({cartList})
  return( 
  <div>CartPage</div>)
};
