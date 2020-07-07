import React, { Component } from 'react'
import ApplicationList from '../applications/ApplicationList'
import NewAppForm from '../applications/NewAppForm'
import { connect } from 'react-redux' //Connects this component to the redux store
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux' 

class Home extends Component {
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
        apps: state.firestore.ordered.apps
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'apps'}
    ])
)(Home) 