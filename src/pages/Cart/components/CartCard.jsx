/* eslint-disable */

import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext.jsx";
import { numberFormat } from '../../../components/Elements/numberFormat.js'

const CartCard = (prop) => {

    const {

        addToCartList,
        removeFromCartList,
        setQuantityToCartItem,
        removeItemFromCartList,

    } = useContext(CartContext);

    const { item } = prop

    const [Value, SetValue] = useState(item.quantity)

    return (
        <ul
            className=" cardList border-b py-5    items-center "
            key={item.id}>

            <li className="flex   gap-4 items-center    ">
                <img
                    className="w-16  rounded-md"
                    src={item.image}
                    alt=""
                />
                <p className="font-bold  text-md">{item.name}</p>
            </li>
            <li className="   ">
                ${item.price}
            </li>
            <li className="grid place-content-center">
                <div className="border flex items-center gap-1 rounded-lg   border-gray-500 p-2  ">
                    <span
                        onClick={() => {
                            removeFromCartList(item)
                            SetValue(item.quantity - 1)
                        }

                        }
                        className="px-2 text-lg cursor-pointer "
                    >
                        -
                    </span>
                    <div className="grid   w-10" >

                        <input className=" outline-0 w-full text-center"

                            type="text"
                            inputMode="numeric"
                            value={item.quantity}



                            onChange={(e) => {
                                SetValue(e.target.value)

                                console.log(e.target.value)

                                console.log(item.quantity)

                                if (e.target.value.length > 0) {
                                    setQuantityToCartItem(item, parseInt(e.target.value))
                                } else {
                                    setQuantityToCartItem(item, 0)
                                    console.log("I am in the else statement")

                                }


                            }}

                        />

                    </div>





                    {/* <p className="">
                    {item.quantity}
                </p> */}

                    <span
                        onClick={() => {
                            addToCartList(item)
                            SetValue(item.quantity + 1)
                        }


                        }
                        className="px-2 text-lg cursor-pointer  "
                    >
                        +
                    </span>
                </div>
            </li>

            <li className=" ">
                <p className="w-16 break-all">
                    ${numberFormat(item.price * item.quantity)}
                </p>

            </li>
            <li className="  cursor-pointer"
                onClick={() =>
                    removeItemFromCartList(item)
                }
            >
                {
                    <svg
                        width="18"
                        height="22"
                        viewBox="0 0 24 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_2212_195)">
                            <path
                                d="M9.13393 2.76429L8.11607 4.28571H15.8839L14.8661 2.76429C14.7857 2.64643 14.6518 2.57143 14.5071 2.57143H9.4875C9.34286 2.57143 9.20893 2.64107 9.12857 2.76429H9.13393ZM17.0089 1.33929L18.975 4.28571H19.7143H22.2857H22.7143C23.4268 4.28571 24 4.85893 24 5.57143C24 6.28393 23.4268 6.85714 22.7143 6.85714H22.2857V23.1429C22.2857 25.5107 20.3679 27.4286 18 27.4286H6C3.63214 27.4286 1.71429 25.5107 1.71429 23.1429V6.85714H1.28571C0.573214 6.85714 0 6.28393 0 5.57143C0 4.85893 0.573214 4.28571 1.28571 4.28571H1.71429H4.28571H5.025L6.99107 1.33393C7.54821 0.503571 8.48571 0 9.4875 0H14.5071C15.5089 0 16.4464 0.503571 17.0036 1.33393L17.0089 1.33929ZM4.28571 6.85714V23.1429C4.28571 24.0911 5.05179 24.8571 6 24.8571H18C18.9482 24.8571 19.7143 24.0911 19.7143 23.1429V6.85714H4.28571ZM8.57143 10.2857V21.4286C8.57143 21.9 8.18571 22.2857 7.71429 22.2857C7.24286 22.2857 6.85714 21.9 6.85714 21.4286V10.2857C6.85714 9.81429 7.24286 9.42857 7.71429 9.42857C8.18571 9.42857 8.57143 9.81429 8.57143 10.2857ZM12.8571 10.2857V21.4286C12.8571 21.9 12.4714 22.2857 12 22.2857C11.5286 22.2857 11.1429 21.9 11.1429 21.4286V10.2857C11.1429 9.81429 11.5286 9.42857 12 9.42857C12.4714 9.42857 12.8571 9.81429 12.8571 10.2857ZM17.1429 10.2857V21.4286C17.1429 21.9 16.7571 22.2857 16.2857 22.2857C15.8143 22.2857 15.4286 21.9 15.4286 21.4286V10.2857C15.4286 9.81429 15.8143 9.42857 16.2857 9.42857C16.7571 9.42857 17.1429 9.81429 17.1429 10.2857Z"
                                fill="#FF0000"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_2212_195">
                                <rect
                                    width="24"
                                    height="27.4286"
                                    fill="white"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                }
            </li>
        </ul>
    )
}

export default CartCard