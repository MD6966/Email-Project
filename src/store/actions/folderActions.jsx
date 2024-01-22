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
      // console.log(res, "RESPONSE OF FOLDER SUCCESSSS ")
      dispatch({
        type: 'FOLDER_SUCCESS',
        payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };
  export const getAllFoldersGoogle = () => async (dispatch) => {
  
    try {
      const res = await api.get('api/google-folders');
      // console.log(res, "RESPONSE OF FOLDER SUCCESSSS ")
      dispatch({
        type: 'FOLDER_SUCCESS_GOOGLE',
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
    // console.log(cont, "THIS IS CONTENT")
    dispatch({
      type: 'CONTENT_SETTER',
      payload:cont,
    });
    
  };
  export const loginSRC = (src) => (dispatch) => {
    dispatch({
      type: 'LOGIN_SRC',
      payload:src,
    });
    
  };
  export const loginHITSRC = (src) => (dispatch) => {
    console.log(src, "This is SRC ACTION")
    dispatch({
      type: 'LOGIN_HIT_SRC',
      payload:src,
    });
    
    
  };
  export const current_State = (c_state) => (dispatch) => {
    dispatch({
      type: 'SWITCH_CURRENT_STATE',
      payload:c_state,
    });
    
    
  };
  export const logout = () => (dispatch) => {
    dispatch({
      type: 'LOG_OUT',
    });

  };

  export const authenticate = (code) => async (dispatch) => {
  
    try {
      const res = await api.post('api/outlook-authenticate', code);
      return res ;
    } catch (err) {
      throw err;
    }
  };

  export const authenticateGoogle = (code) => async (dispatch) => {
  
    try {
      const res = await api.post('api/google-authentication', code);
      return res ;
    } catch (err) {
      throw err;
    }
  };
  export const outlookSubsctiption = () => async (dispatch) => {
    try {
      const res = await api.get('api/outlook-subscription');
      dispatch({
        type: 'OULOOK_SUB',
        payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };
  export const getGroupContacts = () => async (dispatch) => {
    try {
      const res = await api.get('api/outlook-contacts');
      dispatch({
        type: 'GROUP_CONTACTS',
        payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };

  export const addContactsGroup = (data) => async (dispatch) => {
    try {
      const res = await api.post('api/outlook-add-contacts', data);
      dispatch({
        type: 'ADD_GROUP_CONTACTS',
        payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };
  export const removeContactsFromGroup = (data) => async (dispatch) => {
    try {
      const res = await api.post('api/outlook-remove-contacts', data);
      dispatch({
        type: 'REMOVE_GROUP_CONTACTS',
        payload: res.data.payload,
      });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };
  export const deleteFolder = (data) => async (dispatch) => {
    try {
      const res = await api.post('api/delete-folder-mail', data);
      // dispatch({
      //   type: 'REMOVE_GROUP_CONTACTS',
      //   payload: res.data.payload,
      // });
  
      return res ;
    } catch (err) {
      throw err;
    }
  };