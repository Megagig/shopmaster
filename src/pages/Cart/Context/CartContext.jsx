/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState(localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList')) : [])

  
    const addToCart = (item) => {
        console.log({item})
        const isItemInCart = cartList.find((cartItem) => cartItem.id === item.id); // check if the item is already in the cart
        console.log(isItemInCart)
        if (isItemInCart) {
        setCartList(
            cartList.map((cartItem) => // if the item is already in the cart, increase the quantity of the item
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem // otherwise, return the cart item
            )
        );
        } else {
        setCartList([...cartList, { ...item, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
        }
      };


      const removeFromCart = (item) => {
        const isItemInCart = cartList.find((cartItem) => cartItem.id === item.id);
      
        if (isItemInCart.quantity === 1) {
          setCartList(cartList.filter((cartItem) => cartItem.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
        } else {
          setCartList(
            cartList.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
                : cartItem
            )
          );
        }
      };

      const clearCart = () => {
        setCartList([]); // set the cart items to an empty array
      };

      const getCartTotal = () => {
        return cartList.reduce((total, item) => total + item.price * item.quantity, 0); // calculate the total price of the items in the cart
      };

      useEffect(() => {
        localStorage.setItem("cartList", JSON.stringify(cartList));
      }, [cartList]);

      useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
          setCartList(JSON.parse(cartItems));
        }
      }, []);
      return (
        <CartContext.Provider
          value={{
            cartList,
            addToCart,
            removeFromCart,
            clearCart,
            getCartTotal,
          }}
        >
          {children}
        </CartContext.Provider>
      );
}