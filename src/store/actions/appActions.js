export const createApp = (app) => {
    return (dispatch, getState , {getFirebase, getFirestore}) => {
        
        const firestore = getFirestore()
        const uid = getState().firebase.auth.uid

        //Timestamp
        var curDate = new Date()
        var created = curDate.getFullYear() + "." + (curDate.getMonth() + 1) + "." + curDate.getDate()
        
        firestore.collection('users').doc(uid).collection('app_list').add({
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

export const removeApp = (app) => {
    
}