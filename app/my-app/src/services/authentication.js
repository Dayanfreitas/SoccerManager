import axios from "axios";

const authentication = (name) => {

    const apiAuth = axios.create({
        baseURL: 'http://localhost:3000/',
        timeout: 3000,
    });

    const getCurrentUser = () => {
        return JSON.parse(localStorage.getItem('current_user')) 
    }

    const factoryUser = (user) => {
        return {
            id: user.id,
            email: user.email,
            name: user.name
        }
    }

    return {
        getCurrentUser,
        logout: (param)=> {
            return new Promise ((resolve) => {
                apiAuth.delete(name+'/sign_out', param)
                .then((r) => {                     
                    localStorage.removeItem('X-User-Email')
                    localStorage.removeItem('X-User-Token')
                    localStorage.removeItem('current_user')
                    
                    window.location.reload(true)
                    resolve(r)
                })
                .catch((error)=>{
                    resolve(error.response)
                })
            })
        },
        singIn: (param) => {            
            return new Promise ((resolve) => {
                apiAuth.post(name+'/sign_in', param)
                .then((r) => {
                    localStorage.setItem('X-User-Email', r.data.email)
                    localStorage.setItem('X-User-Token', r.data.authentication_token)
                    localStorage.setItem('current_user', JSON.stringify(factoryUser(r.data)))                    
                    resolve(r)
                })
                .catch((error)=>{
                    resolve(error.response)
                })
            })
        }
    }

}

export default authentication('/auth')