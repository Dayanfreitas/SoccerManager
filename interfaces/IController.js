const IController = function() {
    let CONTAINER = 'root'
    let TEMPLATE = ''
    

    const HClick = (func) => {
        return `
            onclick='(
                ${
                    func
                }
                )()
            '
        `
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

        template(template_string)
        // CONTAINER.innerHTML = string
    }

    
    let Model = null
    let contextObservable = null
    
    let index = () => { throw "Implemented index"}
    let remove = () => { throw "Implemented remove"}

    let edit = (params) => { 
        const obj = Model.getAll(params.id)
        renderEdit(obj)
    }

    const render = (id) => {
        if (id) {
            edit({id})
            return
        }
        // index()

        // debugger
        if (typeof Model == 'function') {
            index()
            return
        }

        const model = Model.getAll()
        contextObservable.notify(model)
    }

    const create = (params) => {
        // debugger
        const model = Model.novas(params)
        model.save()
        contextObservable.notify([])
    }
    
    const updade = (params) => {
        debugger
        // const model = Model.novas(params)
        // model.save()
        // contextObservable.notify([])
    }
    

    const setIndex = (f) => {
        index = f
        contextObservable.subscribe(f)
    }

    const setEdit = (f) => {
        edit = f
    }

    const setContainer = (container) => {
        CONTAINER = container
    }

    const template = (t) => {
        
        let c = document.getElementById(CONTAINER)
        c.innerHTML = t
        
        // c.querySelector('[map]')
    }

    const data = () => {
        return {

        }
    }
    const init = (model) => {
        contextObservable = Observable()
        Model = model

        return { 
            CONTAINER,
            TEMPLATE,
            contextObservable, 
            setIndex,
            setEdit, 
            setContainer, 
            render, 
            index, 
            edit, 
            remove, 
            create,
            updade,
            template,
            data
        }
    }

    return {
        init
    }
}


export default IController