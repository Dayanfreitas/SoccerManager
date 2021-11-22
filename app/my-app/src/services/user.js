import api from "./api"
const user = (name) => {

    return {
        get:() => api.get(name),
        create: (data) => api.post(name, data),
    }

}

export default user('/user')