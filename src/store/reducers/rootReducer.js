import authReducer from './authReducer'
import appReducer from './appReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore' //Pre-made reducer used to sync firestore data with state
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
})

export default rootReducer