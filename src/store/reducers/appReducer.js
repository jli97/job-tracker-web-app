const initState = {

}

const appReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_APP':
            console.log('created app', action.app)
            return state
    
        case 'CREATE_APP_ERROR':
            console.log('failed to create app', action.err)
            return state
        
        case 'DELETE_APP_SUCCESS':
            console.log('app deleted')
            return state
        
        case 'DELETE_APP_ERROR':
            console.log('app delete failed', action.err)
            return state
            
        default:
            return state
    }

}

export default appReducer