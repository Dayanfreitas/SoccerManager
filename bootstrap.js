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
    // debugger
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
}

rootObservable.subscribe(root)
rootObservable.notify()

// <!-- <script type="module" src="./controllers/TeamsController.js"></script> -->
