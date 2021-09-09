import IController from "../interfaces/IController.js"
import User from "../model/user.js";

const UsersController = function(controller) {

    const index = () => {
        
        const template = () => {
            return `
                <h2 class="title">Admin</h2>
                <button type="type" router-go="games" class="btn">Games</button> 
            `
        }

        controller.template(template())
    } 

    controller.setIndex(index)
    return {
        controller
    }
}

export default UsersController(IController('user').init(User))