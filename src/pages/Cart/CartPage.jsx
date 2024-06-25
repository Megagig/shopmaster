import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { Cart } from "./Cart"
export const CartPage = () => {
  //The cartList is ready to use 
  const { cartList } = useContext(CartContext)
  console.log({ cartList })
  return (
    <Cart />
  )
};
