import IModel from '../interfaces/IModel.js'

const Game = function(params) {
    return params
}(IModel().init('Game', { name: null, date: null, time: null }))

export default Game