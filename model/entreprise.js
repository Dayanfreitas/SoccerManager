import IModel from '../interfaces/IModel.js'

const Entreprise = function(params) {
    return params
}(IModel().init('Entreprise', { name: null }))

// Entreprise.novas({name: 'JM'}).save()
export default Entreprise