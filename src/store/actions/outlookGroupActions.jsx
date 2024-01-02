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

  export const createGroup = (body) => async (dispatch) => {
    try {
      const res = await api.post('api/outlook-create-group', body);
      dispatch({
        type: 'CREATE_GROUP',
        payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };
  export const getAllGroups = () => async (dispatch) => {
    try {
      const res = await api.get('api/outlook-group');
    //   dispatch({
    //     type: 'CREATE_GROUP',
    //     payload: res.data.payload,
    //   });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };