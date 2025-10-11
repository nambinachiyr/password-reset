import axios from "axios";

const baseURL = 'https://password-reset-iwfv.onrender.com';
const axiosInstance = axios.create({
   baseURL,
   headers:{
    'Content-Type':'application/json'
   }
})

export default axiosInstance