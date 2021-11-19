// import api from "./api"
import axios from "axios";

const authentication = (name) => {

    const api = axios.create({
        baseURL: 'http://localhost:3000/',
        timeout: 3000,
    });


    return {
        post: (param) => {
            api.post(name, param)
        }
    }

}

export default authentication('/authentication')