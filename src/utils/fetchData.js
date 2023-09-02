import axios from 'axios';

// Define la URL base de la API en la nube
const BASE_URL = "mongodb://nombredjamel:contrasenadjamel@imobiliaria-shard-00-00.ic6yw.mongodb.net:27017,imobiliaria-shard-00-01.ic6yw.mongodb.net:27017,imobiliaria-shard-00-02.ic6yw.mongodb.net:27017/djamel04?ssl=true&replicaSet=atlas-5vh19o-shard-0&authSource=admin&retryWrites=true&w=majority" 

export const getDataAPI = async (url, token) => {
    const res = await axios.get(`${BASE_URL}/api/${url}`, {
        headers: { Authorization: token }
    });
    return res;
};

export const postDataAPI = async (url, post, token) => {
    const res = await axios.post(`${BASE_URL}/api/${url}`, post, {
        headers: { Authorization: token }
    });
    return res;
};

export const putDataAPI = async (url, post, token) => {
    const res = await axios.put(`${BASE_URL}/api/${url}`, post, {
        headers: { Authorization: token }
    });
    return res;
};

export const patchDataAPI = async (url, post, token) => {
    const res = await axios.patch(`${BASE_URL}/api/${url}`, post, {
        headers: { Authorization: token }
    });
    return res;
};

export const deleteDataAPI = async (url, token) => {
    const res = await axios.delete(`${BASE_URL}/api/${url}`, {
        headers: { Authorization: token }
    });
    return res;
};
