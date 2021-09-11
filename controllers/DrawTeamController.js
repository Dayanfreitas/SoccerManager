import IController from "../interfaces/IController.js"
import IModel from "../interfaces/IModel.js"

import Configuration from "../model/configuration.js"
import Player from "../model/players.js"
import Team from "../model/team.js"

const DrawTeamController = function(controller) {
    
    // Função para randomizar array
    // function shuffleArray(arr) {
    //     // Loop em todos os elementos
    //     for (let i = arr.length - 1; i > 0; i--) {
    //             // Escolhendo elemento aleatório
    //         const j = Math.floor(Math.random() * (i + 1));
    //         // Reposicionando elemento
    //         [arr[i], arr[j]] = [arr[j], arr[i]];
    //     }
    //     // Retornando array com aleatoriedade
    //     return arr;
    // }

    const  drawTeam = () => {
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
            <h2 class="title">Sortear Time</h2>
            
            <button type="type" HClick="DrawTeamController.drawTeam" class="btn btn-random">Sortear <i class="fas fa-random"></i></button> 
            `
            
            // let header = Object.keys(Configuration.attr)
            // return `
            // <div>
            //     <h2 class="title">Configuration Controller</h2>
            //     <table>
            //         <thead>
            //             <tr>
            //             ${
            //                 header.map((e)=>{
            //                     return `<th>${e}</th>`
            //                 }).join('')
            //             }
            //             </tr>
            //         </thead>
            //         <tbody>
            //             ${
            //                 renderBody()
            //             }
            //         </tbody>
            //     </table>
            // </div>
            // `        
            
        }

        controller.template(template())
    } 

    controller.setIndex(index)
    return {
        controller,
        drawTeam
    }
}

export default DrawTeamController(IController('').init(IModel))