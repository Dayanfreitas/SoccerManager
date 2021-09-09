import IController from "../interfaces/IController.js"
import IModel from "../interfaces/IModel.js"

import Configuration from "../model/configuration.js"
import Player from "../model/players.js"
import Team from "../model/team.js"

const menuController = function(controller) {
    
    // Função para randomizar array
    function shuffleArray(arr) {
        // Loop em todos os elementos
        for (let i = arr.length - 1; i > 0; i--) {
                // Escolhendo elemento aleatório
            const j = Math.floor(Math.random() * (i + 1));
            // Reposicionando elemento
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        // Retornando array com aleatoriedade
        return arr;
    }

    const  menu = () => {
        const config = Configuration.where({name: 'team_size'})
        const teamSize = config[0].value

        const players = shuffleArray(Player.getAll())
        const teams = (players.length / teamSize)

        let i = 0
        for (let i=0; i<teams; i++) {
            const name = 'Time ' + (i + 1)
            let team = Team.where({name})
           
            console.log("TIME - >", name)
            if (!team.length){
                team = Team.novas({name})
                team.save()
            }

            for (let c = 0; c < teamSize; c++) {
                const P = Player.novas(players.pop())
                console.log("c", c)
                console.log("P_>", P)
                
                P.team_id = team.id
                P.update()
            }
        }
        
        controller.renderGo('teams')
    }

    const index = () => {
        
        const template = () => {
            return `

            <h2 class="title">Menu Controller</h2>
            <nav>
                <ul>
                    <li>
                        <a router-go="games" class="active">Jogos <i class="fas fa-gamepad"></i></a>
                    </li>
                    <li>
                        <a router-go="players" class="">Jogadores <i class="fas fa-users"></i></a>
                    </li>
                    <li>
                        <a router-go="teams" class="">Equipes <i class="fas fa-users"></i></a>
                    </li>
                    <li>
                        <a router-go="configuration" class="">Configurações <i class="fas fa-cog"></i></a>
                    </li>
                    <li>
                        <a router-go="drawteam" class="">Sortear Time <i class="fas fa-random"></i></a>
                    </li><li>
                        <a router-go="menu" class="">Sortear Time <i class="fas fa-random"></i></a>
                    </li>
                </ul>
            </nav>
            `
        }

        controller.template(template())
    } 

    // controller.setIndex(index)
    return {
        controller,
        menu
    }
}

export default menuController(IController('').init(IModel))