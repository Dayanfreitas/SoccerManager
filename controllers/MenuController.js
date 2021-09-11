import IController from "../interfaces/IController.js"
import IModel from "../interfaces/IModel.js"

import Configuration from "../model/configuration.js"
import Menu from "../model/menu.js"
const menuController = function(controller) {

    const template = () => {
        const menus = Menu.getAll()
        const template = `
        <nav>
            <ul>
             ${
                menus.map((e) => {
                    return `
                        <li>
                            <a router-go="${e.router}" class="">${e.name} <i class="fas fa-${e.icon}"></i></a>
                        </li>
                        `
                }).join('')     
             }
            </ul>
        </nav>`

        return template
    }

    const index = () => { controller.template(template()) } 
    controller.setIndex(index)
    controller.TEMPLATE = template()
    return {
        controller
    }
}

export default menuController(IController('').init(IModel))