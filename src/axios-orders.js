import axios from 'axios';

const orderAxiosInstance = axios.create({
      baseURL : 'https://react-app-3c1c2.firebaseio.com/',
});

export default orderAxiosInstance;
