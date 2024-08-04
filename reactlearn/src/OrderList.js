import React from "react";
import OrderStatus from "./OrderStatus";

const OrderList = ({ orders }) => {
  return (
    <div>
      {orders.map((order) => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </div>
  );
};

export default OrderList;
