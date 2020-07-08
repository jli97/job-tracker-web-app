export const createApp = (app) => {
    return (dispatch, getState , {getFirebase, getFirestore}) => {
        
        const firestore = getFirestore()
        const uid = getState().firebase.auth.uid

        //Timestamp
        var curDate = new Date()
        var created = curDate.getFullYear() + "." + (curDate.getMonth() + 1) + "." + curDate.getDate()
        var unix = Math.floor(Date.now() / 1000)

        firestore.collection('users').doc(uid).collection('app_list').add({
            ...app,
            status: 'Applied',
            createdAt: created,
            unix: unix
        }).then(() => {
            dispatch({type:'CREATE_APP', app})
        }).catch((err) => {
            dispatch({type: 'CREATE_APP_ERROR', err})
        })
        
    }
}

export const deleteApp = (appId) => {
    return(dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        const uid = getState().firebase.auth.uid

        firestore.collection('users').doc(uid).collection('app_list').doc(appId).delete(     
        ).then(() => {
            dispatch({type:'DELETE_APP_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'DELETE_APP_ERROR', err})
        })
    }
}