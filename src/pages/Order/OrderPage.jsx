import React from "react";
import OrderCard from "./components/OrderCard";
import { orders } from "./data";

const OrderPage = () => {
    return (
        <div>
            <h1>Your Order</h1>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="order-info">
                  <h3 className="">Order Info</h3>

                  <div className="flex">
                    
                  </div>
                </div>

                <div className="order-cards">
                    {
                      orders.map(order => (
                        <OrderCard key={order.id} info={order} />
                      ))
                    }
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
