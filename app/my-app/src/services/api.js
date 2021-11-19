import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    timeout: 3000,
});

api.defaults.headers.common['X-User-Email'] = "dayan@gmail.com"
api.defaults.headers.common['X-User-Token'] = "AS2Jtkm3isV-xEN-xPET"

// api.defaults.headers.commo['Authorization'] = `bearer ${token}`

export default api;