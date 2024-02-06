import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
});

const getToken = () => {
  return localStorage.getItem("token");
};

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const setList = (list_type) => (dispatch) => {
  // console.log(list_type.title)
  dispatch({
    type: "SET_LIST",
    payload: list_type,
  });
};

export const getListData = (folder_id, page) => async (dispatch) => {
  const body = {
    folder_id: folder_id,
  };
  try {
    const res = await api.post(`api/outlook-email?page=${page}`, body);
    dispatch({
      type: "FOLDER_ID_SUCCESS",
      payload: res.data.payload,
    });
    return res;
  } catch (err) {
    throw err;
  }
};
export const getListDataGoogle = (folder_id, page) => async (dispatch) => {
  const body = {
    folder_id: folder_id,
  };
  try {
    const res = await api.post(`api/get-google-emails?page=${page}`, body);
    dispatch({
      type: "FOLDER_ID_SUCCESS_G",
      payload: res.data.payload,
    });
    return res;
  } catch (err) {
    throw err;
  }
};
export const loadingFalse = () => (dispatch) => {
  dispatch({
    type: "RESET_GROUP_LOADING",
  });
};
