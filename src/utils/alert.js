import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = value => {
  const params = {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'colored',
  };

  switch (value) {
    case 'warning':
      toast.warn('Nothing found for your request!', params);
      break;
    case 'error':
      toast.error('Error! Something wrong!', params);
      break;
    default:
      console.log('нет такой натификации');
  }
};
export default notify;
