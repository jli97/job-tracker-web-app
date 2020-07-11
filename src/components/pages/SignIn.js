import React, { Component } from 'react'
import firebase from '../../config/fbconfig'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { compose } from 'redux' 
import { connect } from 'react-redux'
import { createUser } from '../../store/actions/authActions'
import { signIn } from '../../store/actions/authActions'
import { withRouter } from 'react-router-dom'

const SignIn = (props) => {
    var uiConfig = {
        signInFlow: "redirect",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
        signInSuccessUrl: '/',
        callbacks:{
            signInSuccessWithAuthResult: (authResult) => {
                if(authResult.additionalUserInfo.isNewUser){ //If new user
                    const createUser = props.createUser(authResult)
                    const signIn = props.signIn()
                    Promise.all([createUser, signIn]).then( () =>{
                        props.history.push('/')
                        return true
                    }
                    )
 
                } else{ //If existing user
                    props.signIn()
                    return true
                    
                }
            },
            signInFailure: (err) => {
                props.signIn(err)
            }
        }
        
    }

    return (
        <div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
    )
    
}

const mapDispatchToProps = (dispatch) => { //connect() users this function to connect this component to the reducer
    return {
        createUser: (authResult) => dispatch(createUser(authResult)),
        signIn: (err) => dispatch(signIn(err))
    }
}

export default compose(connect(null, mapDispatchToProps), withRouter)(SignIn)