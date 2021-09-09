import IController from "../interfaces/IController.js"
import Configuration from "../model/configuration.js"
const ConfigurationController = function(controller) {
    const renderBody = () => {
        let configuration = Configuration.getAll()
                                
        return configuration.map((c) => {
            return `
            <tr>
                <td>
                    ${c.name.toUpperCase().replace("_"," ")}
                </td>
                <td>
                    <input id="${c.name}" class="input-config" type="text" value="${c.value}">
                </td>
            </tr>
            `
        }).join(' ')
        
    }

    const index = () => {
        
        const template = () => {
            let header = Object.keys(Configuration.attr)
            return `
            <div>
                <h2 class="title">Configuration Controller</h2>
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
                            renderBody()
                        }
                    </tbody>
                </table>
            </div>
            `        
        }

        controller.template(template())
    } 

    controller.setIndex(index)
    return {
        controller
    }
}

export default ConfigurationController(IController('configuration').init(Configuration))