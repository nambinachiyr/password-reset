import axios from "axios";

const baseURL = 'https://password-reset-m6lh.onrender.com/api';
const axiosInstance = axios.create({
   baseURL,
   headers:{
    'Content-Type':'application/json'
   }
})

export default axiosInstance