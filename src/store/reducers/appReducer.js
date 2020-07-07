const initState = {
    apps: [
        {id: '1', job_title: 'Software Engineer Google', status: 'Applied'},
        {id: '2', job_title: 'Software Engineer Facebook', status: 'Offer'},
        {id: '3', job_title: 'Software Engineer Netflix', status: 'Rejected'}
    ]
}

const appReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_APP':
            console.log('created project', action.app)
            return state
    
        case 'CREATE_APP_ERROR':
            console.log('failed to create app', action.err)
            return state
        
        default:
            return state
    }

}

export default appReducer