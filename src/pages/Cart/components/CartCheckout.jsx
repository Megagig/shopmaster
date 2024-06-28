import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import EmptyCart from "./EmptyCart";
import CartCard from "./CartCard"
import { Link } from "react-router-dom";


const CartCheckout = () => {


    const {
        cartList,

        getCartTotal,
    } = useContext(CartContext);









    console.log(cartList);


    return (
        <>
            {cartList.length === 0 ? (
                <EmptyCart />
            ) : (
                <main className="py-14 px-10 ">
                    <h1 className="text-4xl">Cart</h1>
                    <section className="cartDetails gap-12 mt-10 flex justify-between  ">
                        <div className="cartProducts  w-full ">
                            <ul className="header  border-b  w-full pb-5 ">
                                <li className="   font-bold">Products</li>
                                <li className="   font-bold ">Price</li>
                                <li className=" text-center  font-bold ">
                                    Quantity
                                </li>
                                <li className="  font-bold ">Subtotal</li>
                                <li className="  font-bold ">

                                </li>
                            </ul>





                            <div className="flex flex-col-reverse w-full">
                                {cartList.map((item) => (

                                    <CartCard key={item.id} item={item} />
                                ))}
                            </div>
                        </div>

                        <div className="border inline-block w-1/2 h-fit p-6">
                            <div className="flex justify-between mb-5 font-bold">
                                <h3>Subtotal</h3>
                                <h3> ${getCartTotal()}</h3>
                            </div>
                            <div className="py-4 border-y grid gap-1">
                                <small>Enter Discount Code</small>
                                <div className="flex items-center ">
                                    <input
                                        className=" border-black border rounded-s-lg p-2.5 outline-0 w-full"
                                        placeholder="e.g FLAT50"
                                        type="text"
                                    />
                                    <button className="border border-black bg-black text-white py-2.5 px-6 rounded-e-lg">
                                        Apply
                                    </button>
                                </div>

                                <div className="flex justify-between mt-2">
                                    <p>Delivery Charge</p>
                                    <p>$5.00</p>
                                </div>
                            </div>

                            <div className="flex justify-between mt-6 font-bold">
                                <h3>Grand Total</h3>
                                <h3>${getCartTotal() + 5}</h3>
                            </div>

                            <div className="grid mt-6">
                                <Link
                                    to="/checkout"
                                    className="text-white text-center bg-black p-3 rounded-lg"
                                >
                                    Proceed to Checkout
                                </Link>
                                <Link
                                    to="/products"
                                    className="text-black mt-8 text-center bg-white p-3 border border-black rounded-lg"
                                >
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>
            )}
        </>
    );
};
export default CartCheckout;
