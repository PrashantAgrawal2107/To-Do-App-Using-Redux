// Middleware for logging different operations -->>

const loggerMiddleware = (store)=>{
    return function(next){
        return function(action){
            // Log Actions -->>
            console.log('LOG : ' + action.type + " " + new Date().toString());

            // Call next middleware in pipeline -->>
            next(action);

            // log the modified state of app -->>
            console.log(store.getState());
        }
    }
}

export default loggerMiddleware;