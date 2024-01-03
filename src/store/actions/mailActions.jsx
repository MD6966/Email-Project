import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
});

const getToken = () => {
  return localStorage.getItem('token');
};

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

  export const sendMail = (body) => async (dispatch) => {
    try {
      const res = await api.post('api/outlook-send-email', body);
      dispatch({
        type: 'SEND_EMAIL',
        payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };

  export const deleteMail = (body) => async (dispatch) => {
    try {
      const res = await api.post('api/outlook-delete-email', body);
      dispatch({
        type: 'DELETE_EMAIL',
        payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };
  export const forwardMail = (body) => async (dispatch) => {
    try {
      const res = await api.post('api/outlook-forward-email', body);
      dispatch({
        type: 'DELETE_EMAIL',
        payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };
  export const replyMail = (body) => async (dispatch) => {
    try {
      const res = await api.post('api/outlook-reply-email', body);
      dispatch({
        type: 'REPLY_EMAIL',
        payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };