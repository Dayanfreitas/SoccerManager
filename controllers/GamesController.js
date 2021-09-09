import IController from "../interfaces/IController.js"
import Game from "../model/game.js"

const GamesController = function(controller) {
    // const CONTAINER = document.querySelector("#games")
    
    const weekday = []
    weekday[0] = "Domigo";
    weekday[1] = "Segunda-Feira";
    weekday[2] = "Terça-Feira";
    weekday[3] = "Quarta-Feira";
    weekday[4] = "Quinta-Feira";
    weekday[5] = "Sexta-Feira";
    weekday[6] = "Sábado";
    
    const HelperParams = (object) => {
        return JSON.stringify(object).split('"').join("&quot;") 
    }

    function renderEdit(currentModel) {
        const keys = Object.keys(currentModel)
        
        let template_string = keys.map((key) => {
            let value = currentModel[key]
            
            if (key == 'id') {
                return ''
            }

            return `
                <br/>
                <label for="${key}">${key}</label>
                <input id="${key}" type="text" name="${key}" value="${value}">
            `
        }).join(' ')
        template_string = `
        <button type="type" router-back class="btn right">Voltar</button>        
            <form class="form-control">
                ${template_string}

                <button type="button" class="save-button btn" data-action="">Salvar</button>
            </form>
        <br/>
        `

        controller.template(template_string)
        // CONTAINER.innerHTML = string
    }


    const edit = (params) => {
        const obj = Game.getAll(params.id)
        renderEdit(obj)
    }
    
    const renderGames = () => {
        let games = Game.getAll()

        return games.map((game) => {
            const [y,m,d] = game.date.split('-')
            let mes = m*1
            mes = m-1
            
            let day = weekday[new Date(y,mes,d, 12).getDay()]
            
            return `
            <tr>
                <td>${game.name} - ${day}</td>
                <td>${game.date}</td>
                <td>${game.time}</td>
                <td>
                    <a router-go="games/${game.id}"><i class="fas fa-pen"></i>Editar</a>
                </td>
                <td>
                    <a><i class="fas fa-times"></i> Remover</a>
                </td>
            </tr>
            `
        }).join(' ')

    }

    const index = (game) => {
        let header = Object.keys(Game.attr).concat(['', ''])
        // const gamesHTML = document.querySelector("#games")

        const template = () => {
            return `
            <div>
                <button type="type" router-back class="btn right">Voltar</button> 
                <h2 class="title">Jogos</h2>
                <table>
                    <thead>
                        <tr>
                        ${
                            header.map((e)=>{
                                return `<th>${e}</th>`
                            }).join('')
                        }
                        </tr>
                    </thead>
                    <tbody>
                        ${
                            renderGames()
                        }
                    </tbody>
                </table>
            </div>
            `
        }

        controller.template(template())
    } 

    const remove = (params) => {
        debugger
    }

    controller.setIndex(index)
    controller.setEdit(edit) 

    return {
        controller
    }
}

export default GamesController(IController('game').init(Game))