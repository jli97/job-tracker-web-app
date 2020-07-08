const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'SIGNIN_SUCCESS':
            console.log('signin success')
            return {
                ...state,
                atuhError: null
            }
        
        case 'SIGNIN_ERROR':
            console.log('signin failed')
            return{
                ...state,
                authError: action.err.message
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success')
            return state

        case 'CREATE_USER_SUCCESS':
            console.log("user created")
            return {
                ...state,
                authError: null
            }
        
        case 'CREATE_USER_ERROR':
            console.log("user failed to create")
            return{
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
}

export default authReducer