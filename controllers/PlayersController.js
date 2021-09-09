import IController from "../interfaces/IController.js"
import Player from "../model/players.js"

const PlayersController = function (controller) {
    function calcStar(person){ 
        let s = ''

        for(let i = 0; i < person.stars; i++) {
            s += `<i class="fas fa-star"></i>`
        }
        

        return s
    }

    const edit = (params) => {
        const obj = Player.getAll(params.id)
        // renderEdit(obj)
    }

    const componentCard = (p) => {
        return `<div class="card" router-go="players/${p.id}">
            <div class="header">
                <img src="${p.img_src}"/>
                <p class="name">${p.name}</p>
                <span class="pos ${p.pos}">${p.pos}</span>
            </div>
            <div class="content">
                <div class="stars">
                ${
                    calcStar(p)
                }
                </div>
            </div>
        </div>`
    }

    const index = (person) => {
        if (!person.length) {
            person = Player.getAll()
        }
        
        let template = person.map((p) => {
            return componentCard(p)
        }).join('')

        // <button onclick="renderForm()" style="float: right;">Adicionar</button>
        template = `
        <h2 class="title">Jogadores</h2>
        <div id="players">${template}</div>  
        `
    //     <form class="form-control">

    //     <label for="name">Nome</label>
    //     <input id="name" type="text" name="name">
    
    //     <label for="name">Pos</label>
    //     <input id="pos" type="text" name="pos">
    
    //     <button type="button" class="btn" HClick="PlayersController.create">Salvar</button>
    // </form> 
  
        controller.template(template)
    }

    controller.setIndex(index)
    // controller.setEdit(edit)
    return { controller, componentCard} 
}

export default PlayersController(IController().init(Player))