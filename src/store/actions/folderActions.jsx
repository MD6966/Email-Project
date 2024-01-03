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
export const getAllFolders = () => async (dispatch) => {
  
    try {
      const res = await api.post('api/outlook-folders');
      dispatch({
        type: 'FOLDER_SUCCESS',
        payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };
  export const resetLoading = () => (dispatch) => {
    dispatch({
      type: 'RESET_LOADING',
    });

  };
  export const folderName = (name) => (dispatch) => {
    // console.log(name, "FROM ACTIONS")
    dispatch({
      type: 'FOLDER_NAME',
      payload:name,
    });

  };

  export const content = (cont) => (dispatch) => {
    dispatch({
      type: 'CONTENT_SETTER',
      payload:cont,
    });

  };