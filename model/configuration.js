import IModel from '../interfaces/IModel.js'

const Configuration = function(params) {
    return params
}(IModel().init('Configuration', { name: null, value: null }))

export default Configuration