import IModel from '../interfaces/IModel.js'
import Player from './players.js'

const Team = function(params) {
    return params
}(IModel().init('Team', 
    { name: null }, 
    { has_many: Player }
    )
)

export default Team