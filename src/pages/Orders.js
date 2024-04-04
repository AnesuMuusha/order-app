import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const orders = [
    "65f1888eca763954f8e1ca06",
    "65f190c3ff993bb6fbcde822",
    "65fae76c0ff63ef14669a6b6",
  ];

  return (
    <>
      <h4 className="text-xl font-medium my-8">Orders</h4>

      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            <Link to={`/orders/${order}`}>{order}</Link>

          </li>
        ))}
      </ul>
    </>
  );
};

export default Orders;