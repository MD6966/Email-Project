import axios from 'axios'

export const login = (body) => async (dispatch) => {
  
    try {
      const res = await axios.post(`${import.meta.env.VITE_APP_URL}api/login`, body, {
        headers: {
          'Content-Type': 'application/json',
        },
    });
      dispatch({
        type: 'SUCCESS',
        payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };
  
  export const register = (body) => async (dispatch) => {
  
    try {
      const res = await axios.post(`${import.meta.env.VITE_APP_URL}api/register`, body, {
        headers: {
          'Content-Type': 'application/json',
        },
    });
      dispatch({
        type: 'SUCCESS_REGISTER',
        payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };