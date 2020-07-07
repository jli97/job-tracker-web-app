export const createApp = (app) => {
    return (dispatch, getState , {getFirebase, getFirestore}) => {
        
        const firestore = getFirestore()

        //Timestamp
        var curDate = new Date()
        var created = curDate.getFullYear() + "." + (curDate.getMonth() + 1) + "." + curDate.getDate()
        
        firestore.collection('apps').add({
            ...app,
            status: 'Applied',
            createdAt: created
        }).then(() => {
            dispatch({type:'CREATE_APP', app})
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
        
    }
}