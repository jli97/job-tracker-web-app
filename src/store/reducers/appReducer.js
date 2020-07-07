const initState = {
    apps: [
        {id: '1', title: 'Software Engineer Google', status: 'Applied'},
        {id: '2', title: 'Software Engineer Facebook', status: 'Offer'},
        {id: '3', title: 'Software Engineer Netflix', status: 'Rejected'}
    ]
}

const appReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_APP':
            console.log('created project', action.app)
    }

    return state
}

export default appReducer