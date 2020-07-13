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
            return {
                ...state,
                authError: null
            }

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

        case 'CREATE_ANON_SUCCESS':
            console.log('anon user created')
            return {
                ...state,
                authError: null
            }
        case 'CREATE_ANON_ERROR':
            console.log('anon user failed to create')
            return {
                ...state,
                authError: null
            }

        default:
            return state
    }
}

export default authReducer