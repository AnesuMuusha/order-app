import axios from 'axios';

const API_BASE_URL = 'https://api.qa.primis.cx';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL
});

const fetchTrackingData = async (orderId) => {
    try {
      const response = await axiosInstance.get(`/tracking/page/${orderId}`, {
        headers: {
          Authorization: 'the-key'
        }
      });

      //console.log(response.data)
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  

export { fetchTrackingData };

