import api from "./api"
const gameServices = (name) => {

    return {
        get:() => api.get(name)
    }

}

export default gameServices('/games')