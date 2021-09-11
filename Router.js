const Router = function (r) {
    let lastRouter = null
    let routerTemp = null
    let currentRouter = null
    let routers = r

    const TYPE = {
        EDIT: 'edit',
    }

    function processName(name) {
      return name.split("_").map((e) => {return  capitalize(e)}).join('')
    }

    function capitalize(s)
    {
        // s.split("_")
        return s[0].toUpperCase() + s.slice(1);
    }

    const init = () => {
        
        routers.forEach((e) => {
            e.controller.CONTAINER = "root"
            e.controller.renderGo = (name) => { 
                go(name)
            }
            // if (e[processName(e.name)+'Controller']) {
            //     console.log("CONTROLLER", e[processName(e.name)+'Controller'])
            //     e[processName(e.name)+'Controller']}
            // }
            // const tagScript = document.createElement('script')
            // tagScript.type = "module"            
            // tagScript.src = `./controllers/${capitalize(e.name)}Controller.js`
            // document.querySelector('head').appendChild(tagScript)
        })
        
        return {
            go, 
            back,
            render_c
        }
    }
    
    const checkTypeRouter = (routerName) => {
        let idType = null
        // let controller = null

        const matche = routerName.match(/\d+/)
        const id = matche && matche[0]

        if (id) {
            idType = 'EDIT'
        }
        
        
        let router = routers.find((e) => e.name == routerName || routerName.includes(e.name))

        return {
            type: TYPE[idType],
            id: id || null,
            controller: router ? router.controller : null
        }
    }
    
    const setLastAndCurrentRouter = (name) => {

        if (currentRouter == null) {
            currentRouter = routerTemp
        }

        if (routerTemp != currentRouter){
            lastRouter = currentRouter
            currentRouter = routerTemp
            routerTemp = null
        }
    }
    
    const go = (name) => {
        routerTemp = name
        
        // currentRouter -> index 
        // currentRouter/:id -> edit
        // {type: 'edit || null', controller: IController || null , id: Number||null}
        const router = checkTypeRouter(name)
        setLastAndCurrentRouter()

        router.controller.render(router.id)
        renderAction(router)
    }

    const back = () => {
        if (lastRouter) {
            go(lastRouter)
        }
        // renderAction(lastRouter)
    }

    const actions = [
        {
            name: 'router-go', 
            func: (el) => {
                // debugger
                // document.querySelectorAll('a.active').forEach((e)=>{e.classList.remove('active')})
                // el.classList.add('active')

                let r = el.attributes["router-go"]['value']
                go(r)
            }
        },
        {
            name: 'router-back',
            func: (e) => {
                back()
            }
        }
    ]
 

    const renderAction = (router) => { 
        let c = document.querySelector('#'+ router.controller.CONTAINER)
        actions.forEach((action) => {       
            c.querySelectorAll("["+ action.name +"]")
                .forEach((el) => {
                    el.removeEventListener('click',() => {})
                    el.addEventListener('click', () => {
                        action.func(el)
                    })
                })
        })

        c.querySelectorAll('.save-button').forEach((e) => {
            e.removeEventListener('click',() => {})
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

        c.querySelectorAll('[HClick]').forEach((e) => {
            e.addEventListener('click', () => {
                const [controller, action] = e.attributes.hclick.value.split('.')
                const params = e.attributes.params && JSON.parse(e.attributes.params.value) 
                let name = controller.split("Controller")[0]
                const r = routers.find((e) => e.name == name.toLocaleLowerCase())
                
                r[controller][action](e, params)
                
            })
        })
        
        c.querySelectorAll('[map]').forEach((e) => {
            // pego o arr
            // pego o template
            // toco o 

            const router = getCurrentRouter()
            const func = e.attributes.map.value
            
            const children =  e.children
            const keys = Object.keys(children)
            let templateChildren = keys.map((key)=> {
                // let re1 = /[i]/g
                // .replace(re1,'item').replace('{{', '${').replace('}}', '}')
                // "<p>" + i.name + "<p/>"
                let s =  children[key].outerHTML
                //.replace("{{", "\"+").replace("}}", "+\"")
                // debugger
                return s
            }).join(' ')

            templateChildren

            debugger
            //let i in array
            let [ l, i, on, arr] = func.split(' ')
            arr = arr.trim()
            arr = router.controller.data()[arr]
            // arr = JSON.stringify(router.controller.data()[arr]) 
            // arr.forEach((item) => {
            //     debugger
            //     e.innerHTML = t
            // })
            
            for (let i of arr) {
                console.log("i", i)
                console.log("arr", arr)
                console.log("arr", t)
                e.innerHTML = `${t}`
            }

            // debugger
            // const stringFunc = `
            // let t = "${t}"
            // for (${l} ${i} of ${arr}) {
            //     console.log("name:", \"${e}\")
            // }`

            // eval(stringFunc)
            
        })

    }

    const render_c = (e) => {
        const nameTag = e.attributes.tag.value
        const router = getRouter(nameTag)
        const { TEMPLATE } = router.controller

        e.id = nameTag + '_c'        
        e.innerHTML = TEMPLATE

        const c = document.querySelector('#'+nameTag+'_c')
        actions.forEach((action) => {       
            c.querySelectorAll("["+ action.name +"]")
                .forEach((el) => {
                    el.removeEventListener('click',() => {})
                    el.addEventListener('click', () => {
                        action.func(el)
                    })
                })
        })
        return TEMPLATE
    }

    const getRouter = (name) => {
        // currentRouter.toLocaleLowerCase()
        return routers.find((e) => e.name == name.toLocaleLowerCase())
    }

    const getCurrentRouter = () => {
        return routers.find((e) => e.name == currentRouter.toLocaleLowerCase())
    }

    return {
        init,
        // render_c
        // go,
        // back
    }
}

export default Router