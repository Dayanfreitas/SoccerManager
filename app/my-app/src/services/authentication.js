import axios from "axios";

const authentication = (name) => {

    const apiAuth = axios.create({
        baseURL: 'http://localhost:3000/',
        timeout: 3000,
    });

    return {
        logout: (param)=> {
            return new Promise ((resolve, reject) => {
                apiAuth.delete(name+'/sign_out', param)
                .then((r) => {                     
                    localStorage.removeItem('X-User-Email')
                    localStorage.removeItem('X-User-Token')
                    window.location.reload(true)
                    resolve(r)
                })
                .catch((error)=>{
                    resolve(error.response)
                })
            })
        },
        singIn: (param) => {            
            return new Promise ((resolve, reject) => {
                apiAuth.post(name+'/sign_in', param)
                .then((r) => {                     
                    localStorage.setItem('X-User-Email', r.data.email)
                    localStorage.setItem('X-User-Token', r.data.authentication_token)
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