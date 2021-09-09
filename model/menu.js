import IModel from '../interfaces/IModel.js'

const Menu = function(model) {
    return model
}(IModel().init('Menu', { name: null, icon: null, router: null }))

export default Menu