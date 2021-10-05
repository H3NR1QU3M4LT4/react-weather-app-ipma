/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { toast } from 'react-toastify';
import '../components/ToastifyAlerts/toastify.css';
import ToastifyAlerts from '../components/ToastifyAlerts';

toast.configure();
class ToastService {
  successMessage(message) {
    toast.success(<ToastifyAlerts message={message} type="success" />);
  }

  warnMessage(message) {
    toast.warn(<ToastifyAlerts message={message} type="warning" />);
  }

  errorMessage(message) {
    toast.error(<ToastifyAlerts message={message} type="error" />);
  }
}

export default ToastService;

export const toastifyService = new ToastService();
