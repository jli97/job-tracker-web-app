import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const NavBar = (props) => {
    const { auth, profile } = props
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/> //Checks if user is signed in

    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Job Application Tracker</Link>
                {auth.isLoaded && links } {/*Stops dashboard from displaying links until auth is fully loaded*/}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => { //Brings state from reducer to the component, var state is the state of the store
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(NavBar)