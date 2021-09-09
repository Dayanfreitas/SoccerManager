import IController from "../interfaces/IController.js"
import Player from "../model/players.js"
import Team from "../model/team.js"
import PlayersController from "./PlayersController.js"

const TeamsController = function(controller) {
    controller.data = () => {
        return {
            name: 'oi',
            // teams: [{name: "daayn"}, {name: "lena"}]
        }
    }

    const cl = (e, object) => {
        e.children[0].classList.toggle('d-none')
        // if (e.children[0].classList["d-none"]){return}
        const { id } = object
        const playersByTeam = Player.where({team_id: id})
        let template = ""
        
        if (playersByTeam.length) {
            template = playersByTeam.map((player) => {
                return PlayersController.componentCard(player)
            }).join(' ')
        }else {
            template = "<p class=\"not_result\">Nenhum resultado</p>"
        }
        
        e.children[0].innerHTML = template
    }
  
    const HelperParams = (object) => {
        return JSON.stringify(object).split('"').join("&quot;") 
    }

    const index = () => {
        
        const template = () => {
            const teams = Team.getAll()

            return `
                <h2 class="title">Teams</h2>
                ${
                    teams.map((e) =>{ 
                        return `
                            <div class="team">
                                ${
                                    e.name
                                }
                                <div HClick="TeamsController.cl" params="${HelperParams(e)}" class="container-players">
                                    Jogadores
                                    <div class="d-flex">
                                    </div>
                                </div>
                            </div>
                        `
                    }).join(' ')
                }
            `
        }

        controller.template(template())
    } 

    controller.setIndex(index)
    return {
        controller,
        cl
    }
}

export default TeamsController(IController('team').init(Team))
/**
 * Estrutura basica controller
 * 
 * const nameController = function(controller) {
 *   const index = () => {}
 *   controller.setIndex(index)
 *   return {
 *        controller
 *    }
 * 
 * }
 * export default nameController(IController('name').init(Model))
 * 
 */