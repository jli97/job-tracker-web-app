import authReducer from './authReducer'
import appReducer from './appReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore' //Pre-made reducer used to sync firestore data with state

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    firestore: firestoreReducer
})

export default rootReducer