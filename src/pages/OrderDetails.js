import React, { useState, useEffect } from "react";
import { fetchOrderData } from "../services";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import RecommendedProduct from "../components/RecommendedProduct";

function OrderDetails() {
  const { id } = useParams();
  const [trackingData, setTrackingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchOrderData(id)
      .then((data) => setTrackingData(data))
      .catch((error) => {
        console.error(error);
        setError(error.message || "Failed to fetch order data");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!trackingData) return <div>No order data available</div>;

  const { order, campaign } = trackingData;
  const { customer } = order;

  return (
    <>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Your Order</p>
          <OrderDetailsSection order={order} />
        </div>

        <div className="px-4 pt-8">
          <CustomerDetails customer={customer} />
        </div>
      </div>
      <hr />
      <p className="text-xl font-medium flex justify-center items-center pt-4">Recommended Products</p>
      <div className="grid sm:px-10 lg:grid-cols-4 lg:px-20 xl:px-16">
        {campaign &&
          campaign.productRecommendations.map((recommendedProduct) => (
            <RecommendedProduct
              recommendedProduct={recommendedProduct}
              key={recommendedProduct._id}
            />
          ))}
      </div>
    </>
  );
}

const CustomerDetails = ({ customer }) => {
  return (
    <div className="text-lg text-gray-600">
      {customer && (
        <>
          <p className="text-xl font-medium text-black">Customer Details</p>
          <p>
            Customer: {customer.firstName} {customer.secondName}
          </p>
          <p>Email: {customer.email}</p>

          <p className="text-xl font-medium text-black mt-4 ">
            Shipping Details
          </p>
          <p>Address: {formatShippingAddress(customer.shippingAddress)}</p>
        </>
      )}
    </div>
  );
};

const OrderDetailsSection = ({ order }) => {
  const formatCurrency = (amount, currency) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(amount);

  return (
    <div>
      {order && (
        <>
          <span>Items</span>
          {order.products.map((product, index) => (
            <Product product={product} key={index} />
          ))}
          <div className="flex flex-col px-4 py-6 md:p-6 w-full bg-gray-50 space-y-6 mt-6">
            <h3 className="text-xl font-semibold leading-5 text-gray-800">
              Summary
            </h3>
            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
              <div className="flex justify-between  w-full">
                <p className="text-base leading-4 text-gray-800">Subtotal</p>
                <p className="text-base leading-4 text-gray-600">
                  {" "}
                  {formatCurrency(
                    order.orderSubtotal.amount,
                    order.orderSubtotal.currency
                  )}
                </p>
              </div>
              <div className="flex justify-between  w-full">
                <p className="text-base leading-4 text-gray-800">Total Tax</p>
                <p className="text-base leading-4 text-gray-600">
                  {" "}
                  {formatCurrency(
                    order.totalTax.amount,
                    order.totalTax.currency
                  )}
                </p>
              </div>
              <div className="flex justify-between  w-full">
                <p className="text-base leading-4 text-gray-800">
                  Delivery Charge
                </p>
                <p className="text-base leading-4 text-gray-600">
                  {" "}
                  {formatCurrency(
                    order.deliveryCharge.amount,
                    order.deliveryCharge.currency
                  )}
                </p>
              </div>
              <div className="flex justify-between  w-full">
                <p className="text-base leading-4 text-gray-800">Total</p>
                <p className="text-base leading-4 text-gray-600">
                  {" "}
                  {formatCurrency(order.total.amount, order.total.currency)}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const formatShippingAddress = (shippingAddress) => {
  return Object.values(shippingAddress)
    .filter((value) => !!value)
    .join(", ");
};

export default OrderDetails;
