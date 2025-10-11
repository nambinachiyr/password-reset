import axios from "axios";

const baseURL = 'http://localhost:3002/api';
const axiosInstance = axios.create({
   baseURL,
   headers:{
    'Content-Type':'application/json'
   }
})

export default axiosInstance