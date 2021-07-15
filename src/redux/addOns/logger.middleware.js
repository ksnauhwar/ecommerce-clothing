function loggerMiddleware(storeAPI){
    return function wrapDispatch(next){
        return function handleAction(action){
            console.log("Prev",storeAPI.getState());
            console.log("Dispatch",action);
            const result = next(action);
            console.log("Next",storeAPI.getState());
            return result;
        }
    }
}

export default loggerMiddleware;