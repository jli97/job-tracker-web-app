export const signIn = (err) => {
    return(dispatch) => {
        if(err){
            dispatch({type: 'SIGNIN_ERROR'})
        }else{
            dispatch({type: 'SIGNIN_SUCCESS'})
        }
    }
}

export const signInAnonymously = () => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        var user = null

        firebase.auth().signInAnonymously()

        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                firestore.collection('users').doc(user.uid).set({
                    firstname: null,
                    lastname: null,
                    initials: null, 
                    email: null,
                    }).then(() => {
                        firestore.collection('users').doc(user.uid).collection('app_list').doc().set({ //creates app_list collection
                            job_title: 'Some Job',
                            company: 'Some Company',
                            status: 'Applied'
                        }) 
                    }
                    ).then(() => {
                        dispatch({type: 'CREATE_ANON_SUCCESS'}) 
                    }).catch(err => {
                        dispatch({type:'CREATE_ANON_ERROR', err})
                    })
            }else{
                dispatch({type: 'ANON_SIGNIN_FAILED'})
            }
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()
        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'})
        })
        
    }
}


export const createUser = (newUser) => { //Creates user entry in database
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()

        firestore.collection('users').doc(newUser.user.uid).set({
           firstname: newUser.additionalUserInfo.profile.given_name,
           lastname: newUser.additionalUserInfo.profile.family_name,
           initials: newUser.additionalUserInfo.profile.given_name[0] + newUser.additionalUserInfo.profile.family_name[0], 
           email: newUser.additionalUserInfo.profile.email,
        }).then(
            firestore.collection('users').doc(newUser.user.uid).collection('app_list').doc().set({ //creates app_list collection
                job_title: 'Some Job',
                company: 'Some Company',
                status: 'Applied'
            }) 
        ).then(() => {
            dispatch({type: 'CREATE_USER_SUCCESS'}) 
        }).catch(err => {
            dispatch({type:'CREATE_USER_ERROR', err})
        })
            

    }
        
}

export const deleteUser = (user) => {
    return(dispatch, getState, {getFirestore, getFirebase}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        console.log(user.uid)

        firestore.collection('users').doc(user.uid).delete()
        .then(
            user.delete()
        ).catch(function(error) {
            console.log(error.message)
        })
    }
}