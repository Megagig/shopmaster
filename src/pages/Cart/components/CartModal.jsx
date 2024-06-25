import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { CartCard } from "./CartCard";

export const CartModal = () => {
    const { cartList } = useContext(CartContext);
    const [displayCartList , setDisplayCartList] = useState(cartList)
    return (
        <div className="w-13rem h-fit p-6 flex flex-col bg-white ">
                <h3>You have 3 items in the cart</h3>
                {displayCartList.map((item) => (
                    <CartCard key={item}/>
                ))}
                    <div className="w-full flex justify-between">
                        <span>
                            Subtotal
                        </span>
                        <span>
                            $200
                        </span>
                    </div>
                    <button>View Cart</button>
                    <button className="">Checkout</button>
            </div>
    )
}
