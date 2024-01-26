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

export const taskPost = (formData) => async (dispatch) => {
    try {
        const res = await api.post('api/create-task', formData)
        return res
    }
    catch (err) {
        throw err
    }
}

export const getTask = () => async (dispatch) => {
    try {
        const token = getToken();
        const res = await api.get('api/uncomplete-task', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res;
    } catch (error) {
        throw error;
    }
};
export const deleteTask = (id) => async (dispatch) => {
    try {
        const token = getToken();
        const res = await api.post(`api/delete-task/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res
    }
    catch (err) {
        throw err
    }
}

export const getFavouriteTask = () => async (dispatch) => {
    try {
        const token = getToken();
        const res = await api.get('api/uncomplete-task', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res;
    } catch (error) {
        throw error;
    }
};

export const taskFavourite = (id) => async (dispatch) => {
    try {
        const token = getToken();
        const res = await api.post(`api/favorite-task/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res
    }
    catch (err) {
        throw err
    }
}

export const getunFavourite = (id) => async (dispatch) => {
    try {
        const token = getToken();
        const res = await api.post(`api/unfavorite-task/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res
    }
    catch (err) {
        throw err
    }
}

export const taskCompleted = (id) => async (dispatch) => {
    try {
        const token = getToken()
        const res = await api.post(`api/complete-task/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res
    }
    catch (err) {
        throw err
    }
}

export const getTaskCompleted = () => async (dispatch) => {
    try {
        const token = getToken();
        const res = await api.get('api/get-complete-task', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res;
    } catch (error) {
        throw error;
    }
};