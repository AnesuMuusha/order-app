import React, { useState, useEffect } from 'react';
import { fetchTrackingData } from '../services/Api';

function OrderDetails({ orderId }) {
  const [trackingData, setTrackingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrackingData(orderId);
        console.log('Fetched Data:', data); 
        setTrackingData(data);
        console.log(setTrackingData(data));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [orderId]);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
   //if (!trackingData || !trackingData.customer) return <div>No customer data available</div>;
  console.log(trackingData.customer)

  const { firstName, secondName, email } = trackingData.order.customer;;
console.log(firstName, secondName, email )
  return (
    <div>
      <div>Fetched Data</div>
      <h2>Order Details</h2>
      <p>Customer Name: {firstName} {secondName}</p>
      <p>Email: {email}</p>
      {/* Render other relevant data as needed */}
    </div>
  );
}

export default OrderDetails;