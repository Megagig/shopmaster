import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import { BiSolidEdit } from "react-icons/bi";
import { orderReviewData } from "../data";

const OrderReview = ({ addressInfo, paymentInfo, setStep, step }) => {
    const address = () => {
        return `${addressInfo.address}, ${addressInfo.city}, ${addressInfo.state} State.`;
    };

    // console.log(addressInfo);
    // console.log(paymentInfo);

    return (
        <div>
            {orderReviewData.map((order) => (
                <ReviewCard key={order.id} info={order} />
            ))}

            <div className="flex flex-col gap-2 mt-8 border-b pb-4">
                <h3 className="font-bold">Shipping Address</h3>

                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                        <h4 className="font-bold text-sm">{addressInfo.fullName}</h4>
                        <p className="text-sm">{address()}</p>
                    </div>

                    <button className="bg-neutral-200 p-1 rounded-md" onClick={() => setStep(1)}>
                        <BiSolidEdit />
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-2 mt-8 border-b pb-4">
                <h3 className="font-bold">Payment Method</h3>

                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                        <h4 className="font-bold text-sm">Debit Card</h4>
                        <p className="text-sm">{`**** **** **** ${paymentInfo.cardNumber.slice(-4)}`}</p>
                    </div>

                    <button className="bg-neutral-200 p-1 rounded-md" onClick={() => setStep(2)}>
                        <BiSolidEdit />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;
