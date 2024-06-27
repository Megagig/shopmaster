import React from "react";

const ReviewCard = ({ info }) => {
    return (
        <div className="flex gap-2 items-center py-4 border-b">
            <div className="p-2 bg-neutral-100">
                <img src={info.image} alt={info.name} className="w-12 h-12" />
            </div>

            <div className="flex flex-col flex-1 text-sm">
                <h4 className="font-bold">{info.name}</h4>
                <p>Price: {`$${info.price}`}</p>
                <p>Qty: {info.quantity}</p>
            </div>

            <h4 className="text-sm font-bold ml-auto">{`$${info.price * info.quantity}`}</h4>
        </div>
    );
};

export default ReviewCard;
