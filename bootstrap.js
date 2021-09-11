const rootObservable = Observable()
import RunnerPopulate from './populate/index.js'
RunnerPopulate()

import PlayersController from './controllers/PlayersController.js'
import GamesController from './controllers/GamesController.js'
import UsersController from './controllers/UsersController.js'
import TeamsController from './controllers/TeamsController.js'
import ConfigurationController from './controllers/ConfigurationController.js'
import DrawTeamController from './controllers/DrawTeamController.js'
import MenuController from './controllers/MenuController.js'

//Problema no name  por isso fiz redeclaração 
const DrawteamController = DrawTeamController

import Router from './Router.js'
const routers = [
    { name: 'players', controller: PlayersController.controller },
    { name: 'games', controller: GamesController.controller }, 
    { name: 'users', controller: UsersController.controller }, 
    { name: 'admin', controller: UsersController.controller }, 
    { name: 'teams', controller: TeamsController.controller, TeamsController }, 
    { name: 'configuration', controller: ConfigurationController.controller }, 
    { name: 'drawteam', controller: DrawTeamController.controller, DrawTeamController, DrawteamController }, 
    { name: 'menu', controller: MenuController.controller, MenuController }, 
]

const router = Router(routers).init()
router.go('games')
// router.go('players')
// router.go('users')
const App = () => {
    const router = []

}
const app = App()



document.querySelectorAll('.save-button').forEach((e) => {
    e.addEventListener('click', () => {
        const action = e.dataset.action
        const params = {}
        const form = e.parentNode
        const children = form.children

        Object.values(children)
            .forEach((e) =>{ 
                if (e.value == undefined || e.type == "button") { return }

                params[e.name] = e.value
            })
        
            // debugger

        eval(action)(params)
    })
})


function root() {
    
    Window.prototype.shuffleArray = arr => {
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

    Window.prototype.HelperDate = {
        getDay: (Date) => {
            const weekday = []
            weekday[0] = "Domigo";
            weekday[1] = "Segunda-Feira";
            weekday[2] = "Terça-Feira";
            weekday[3] = "Quarta-Feira";
            weekday[4] = "Quinta-Feira";
            weekday[5] = "Sexta-Feira";
            weekday[6] = "Sábado";
            
            return weekday[Date.getDay()] 
        },
        getDate: (game) => {
            const [y,m,d] = game.date.split('-')
            let mes = m*1
            mes = m-1

            return new Date(y, mes, d, 12) 
        },
        formatToFont: (date) => {
            return date.replace(/(\d\d\d\d)-(\d\d)-(\d\d)/,"$3/$2/$1")
        }
    }

    document.querySelectorAll('[router-go]').forEach((e) => {
        e.addEventListener('click', () => {
            let r = e.attributes["router-go"]['value']
            router.go(r)
        })
    })
    
    document.querySelectorAll('[router-back]').forEach((e) => {
        e.addEventListener('click', () => {
            // let r = e.attributes["router-go"]['value']
            debugger
            router.back()
        })
    })   

    document.querySelectorAll('[tag]').forEach((e) => {
        router.render_c(e)
    })   
}

rootObservable.subscribe(root)
rootObservable.notify()

// <!-- <script type="module" src="./controllers/TeamsController.js"></script> -->
