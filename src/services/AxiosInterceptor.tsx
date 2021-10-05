import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastifyService } from './ToastifyService';
axios.defaults.baseURL = '';

const axiosInstance = axios.create();

toast.configure();

const handleSuccessResponse = (response) => {
  toastifyService.successMessage(response.successMessage);
  return response;
};

const handleErrorResponse = (error) => {
  if (error && error.response) {
    switch (error.response.status) {
      case 401:
      case 404:
      case 400:
        toastifyService.warnMessage(error.response.data.message);
        break;

      default:
        toastifyService.warnMessage(error.response.data.message);
        break;
    }
  }
  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(handleSuccessResponse, handleErrorResponse);

export default axiosInstance;
