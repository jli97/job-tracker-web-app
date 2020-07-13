import React, { Component } from 'react'
import firebase from '../../config/fbconfig'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { compose } from 'redux' 
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { createUser, signInAnonymously } from '../../store/actions/authActions'
import { signIn } from '../../store/actions/authActions'
import { withRouter } from 'react-router-dom'

class SignIn extends Component {


    uiConfig = {
        signInFlow: "redirect",
        autoUpgradeAnonymousUsers: true,
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
        signInSuccessUrl: '/home',
        callbacks:{
            signInSuccessWithAuthResult: (authResult) => {
                console.log('got here')
                if(authResult.additionalUserInfo.isNewUser){ //If new user
                    const createUser = this.props.createUser(authResult)
                    const signIn = this.props.signIn()
                    Promise.all([createUser, signIn]).then( () =>{
                        this.props.history.push('/home')
                        return true
                    }
                    )

                } else{ //If existing user
                    
                    this.props.signIn()
                    return true
                }
            },
            signInFailure: (err) => {
                this.props.signIn(err)
            }
        }
        
    }

    handleAnonClick = (e) => {
        this.props.signInAnonymously()
    }

    
    render() {
        return (
            <div style ={{textAlign:'center'}}>
                <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                <NavLink to='/home' onClick={this.handleAnonClick}>Skip for Now</NavLink>
            </div>
        )
    }
    
}

const mapDispatchToProps = (dispatch) => { //connect() users this function to connect this component to the reducer
    return {
        createUser: (authResult) => dispatch(createUser(authResult)),
        signIn: (err) => dispatch(signIn(err)),
        signInAnonymously: () => dispatch(signInAnonymously())
    }
}

export default compose(connect(null, mapDispatchToProps), withRouter)(SignIn)