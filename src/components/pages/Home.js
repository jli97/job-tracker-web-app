import React, { Component } from 'react'
import ApplicationList from '../applications/ApplicationList'
import NewAppForm from '../applications/NewAppForm'
import { connect } from 'react-redux' //Connects this component to the redux store
import { firestoreConnect, isLoaded } from 'react-redux-firebase'
import { compose } from 'redux' 

class Home extends Component {
    componentDidMount() {

    }
    
    render() {
        const { apps } = this.props

        return (
            <div className="home container">
                <ApplicationList apps={apps}/>
                <NewAppForm/>
            </div>
        )
    }
}

const mapStateToProps = (state) => { //connect() users this function to connect this component to the reducer
    console.log(state)
    return {
        apps: state.firestore.ordered.apps, //This points to wear fireStoreConnect() is watching
        firebase: state.firebase //Used to get uid to point fireStoreConnect to the right app_list
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => {
        const authId = props.firebase.auth.uid == null ? "placeholder" : props.firebase.auth.uid;
        return [
          {
            collection: "users",
            doc: authId,
            subcollections: [{ collection: "app_list" }],
            storeAs:'apps'
          }
        ]
    })
)(Home) 