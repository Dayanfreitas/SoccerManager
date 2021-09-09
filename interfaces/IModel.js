function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

const Database = () => {
    let MODEL = ''
    // model().insert()
    
    const model = () => {
        return JSON.parse(localStorage.getItem(MODEL)) 
    }
    
    const modelUpdate = (l) => {
        localStorage.setItem(MODEL, JSON.stringify(l))
        // model()
    }

    const insert = (model, params) => {
        localStorage.setItem(MODEL, convert_to_base(params))

        // model()
    }

    const convert_to_base = (params) => {
        
        let data = model()
        if (data == null || data == "undefined") {
            data = JSON.stringify([params])
            return data 
        }

        
        data[data.length] = params
        return JSON.stringify(data)
    }
    
    const refresh = () => {

    }

    const select = (table) => {
        return JSON.parse(localStorage.getItem(table)) 
    }
    
    const update = (params) => {
        const { id } = params
        let l = select(MODEL)
        
        l = l.map((e) => {
            if (e.id == id) {
                e = params
            }
            
            return e
        })

        modelUpdate(l)
    }

    const findById = (id) => {
        return select(MODEL).find((e) => e.id == id) || null
    }

    const setModel = (model) => {
        MODEL = model
    }

    return {
        insert,
        select,
        setModel,
        update
        // model
    }
}

const IModel = function() {
    // 1 - N
    const RELATIONS = {
        HAS_MANY: 'has_many'
    }

    const db = Database()

    let TABLE_NAME = ""
    let ATTR_FIXES = {}
    let ATTR = {}
    
    const func = () => {
        console.log("Testes")
        
        debugger
    }
    const create = func
    
    const novas = (attr) => {
        ATTR = {...ATTR_FIXES}
        const exportss = Object.assign(process_params(attr), { save, update })
        return exportss
    }
    
    const update = () => {
        db.update(ATTR)
    }

    const save = () => {
        // ATTR.id = new Date().getTime()
        ATTR.id = uuidv4()
        db.insert(TABLE_NAME, ATTR)
    }

    const clear = (params) => {
        DATABASE[DATABASE.length] = 0
    }

    const getAll = (id) => {
        let l = db.select(TABLE_NAME)
        // .where()
        
        if (id) {
            l = l.find((e) => e.id == id)
        }

        return l || []
    }
    
    const where = (filter) => {
        let l = db.select(TABLE_NAME)
        
        Object.keys(filter).forEach((key) => {
            let value =  filter[key]
            
            l = l.filter((e) => {  
                return e[key] == value
            })
        })

        return l
    }

    
    const remove = func

    const init = (name, attr, relations) => {
        if(relations && Object.keys(relations).length) {
            // debugger
            Object.keys(relations).forEach((key) => {
                if (key == RELATIONS.HAS_MANY) {
                    relations[key].attr[name.toLowerCase() + '_id'] = null
                }
            })
        }
        
        
        setModel(name, attr)
        return {
            getAll, where, update, create, remove, save, attr, novas
        }
    }

    const exportFunction = () => {

        return { save }
    }

    const process_params = (params) => {
        if (!Object.keys(params || {}).length) { return {ATTR} ;}

        const model = {}
        Object.keys(ATTR).forEach((e) => {
            
            model[e] = params[e] 
        })
        
        
        ATTR = model
        return ATTR
    }

    const setModel = (name, attr) => {
        TABLE_NAME = name
        ATTR_FIXES = Object.assign({id:null }, attr)
        DATABASE[name] = []
        db.setModel(name)
    }
    
    return { init }
}


export default IModel