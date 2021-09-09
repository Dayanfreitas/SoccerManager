import IModel from '../interfaces/IModel.js'

const User = function(params) {
    return params
}(IModel().init('User', { name: null, email: null, senha: null, is_adm: false }, ))

export default User