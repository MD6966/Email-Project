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
  export const sendMailGoogle = (body) => async (dispatch) => {
    try {
      const res = await api.post('api/google-sendMail', body);
      dispatch({
        type: 'SEND_EMAIL_GOOGLE',
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
        type: 'FORWARD_EMAIL',
        payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };
  export const forwardMailGoogle = (body) => async (dispatch) => {
    try {
      const res = await api.post('api/google-forwardMail', body);
      dispatch({
        type: 'FORWARD_EMAIL_GOOGLE',
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
  export const replyMailGoogle = (body) => async (dispatch) => {
    try {
      const res = await api.post('api/google-replyMail', body);
      dispatch({
        type: 'REPLY_EMAIL_GOOGLE',
        payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };
  
  export const scheduleEmail = (body) => async (dispatch) => {
    try {
      const res = await api.post('api/schedule-email', body);
      dispatch({
        type: 'SCHEDULE_EMAIL',
        payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };
  export const markAsRead = (body) => async (dispatch) => {
    try {
      const res = await api.post('api/outlook-read-email', body);
      dispatch({
        type: 'READ_EMAIL',
        // payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };
  export const markAsReadGoogle = (body) => async (dispatch) => {
    try {
      const res = await api.post('api/google-read-email', body);
      dispatch({
        type: 'READ_EMAIL_GOOGLE',
        // payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };
  export const flagEmail = (body) => async (dispatch) => {
    try {
      const res = await api.post('api/outlook-flagged-email', body);
      dispatch({
        type: 'FLAG_EMAIL',
        // payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };
  export const flagEmailGoogle = (body) => async (dispatch) => {
    try {
      const res = await api.post('api/google-flagged-email', body);
      dispatch({
        type: 'FLAG_EMAIL_GOOGLE',
        // payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };
  export const getGoogleThreads = (id) => async (dispatch) => {
    try {
      const res = await api.get(`api/google-thread/${id}`);
      dispatch({
        type: 'GOOGLE_THREADS',
        // payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };
  export const getOutlookThreads = (id) => async (dispatch) => {
    try {
      const res = await api.get(`api/outlook-coversation/${id}`);
      dispatch({
        type: 'OUTLOOK_THREADS',
        // payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };

  export const unFlagEmail = (body) => async (dispatch) => {
    try {
      const res = await api.post('api/outlook-unflagged-email', body);
      dispatch({
        type: 'UNFLAG_EMAIL',
        // payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };
  export const unFlagEmailGoogle = (body) => async (dispatch) => {
    try {
      const res = await api.post('api/google-unflagged-email', body);
      dispatch({
        type: 'UNFLAG_EMAIL_GOOGLE',
        // payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };
  

  export const movemail = (body) => async (dispatch) => {
    try {
      const res = await api.post('api/move-mail', body);
      dispatch({
        type: 'MOVE_EMAIL',
        // payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };

  export const archiveEmail = (body) => async (dispatch) => {
    try {
      const res = await api.post('api/outlook-archive-email', body);
      dispatch({
        type: 'ARCHIVE_EMAIL',
        // payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };

  export const selectMail = (condition, data) => async (dispatch) => {
    const values = {
      cond: condition,
      ids: data
    }
    dispatch({
      type: 'SELECT_MAIL',
      payload: values,
    });
  };