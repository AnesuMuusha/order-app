import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const orders = [
    {name:"Order one", id:"65f1888eca763954f8e1ca06"},
    {name:"Order two", id:"65f190c3ff993bb6fbcde822"},
    {name:"Order three", id:"65fae76c0ff63ef14669a6b6"},
  ];

  return (
    <>
      <h4 className="text-xl  my-8 font-bold">Orders</h4>

      <ul>
        {orders.map((order, index) => (
          <li key={order.id} className="my-8 text-md font-semibold ">
            <Link to={`/orders/${order.id}`}>{order.name}</Link>

          </li>
        ))}
      </ul>
    </>
  );
};

export default Orders;