import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

const fetchOrderData = async (orderId) => {
  try {
    const response = await axiosInstance.get(`/tracking/page/${orderId}`, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchOrderData };
