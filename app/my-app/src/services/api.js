import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/api/v1',

});

api.defaults.headers.common['X-User-Email'] = "dayan@gmail.com"
api.defaults.headers.common['X-User-Token'] = "AS2Jtkm3isV-xEN-xPET"

export default api;