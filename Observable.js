const Observable = (list) => {
    let observers = []
    
    const subscribe = (f) => {
        observers.push(f)
    }
    
    const unsubscribe = (f) => {
        observers = observers.filter(subscriber => subscriber !== f)
    }

    const notify = (data) => {
        observers.forEach(observer => observer(data));
    }

    return {observers, subscribe, unsubscribe, notify}
}