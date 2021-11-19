import axios from "axios";

const XUserEmail = localStorage.getItem('X-User-Email') || ''
const XUserToken = localStorage.getItem('X-User-Token') || ''

const api = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    timeout: 3000
});

api.defaults.headers.common['X-User-Email'] = XUserEmail
api.defaults.headers.common['X-User-Token'] = XUserToken

export default api;