import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import firebase from '../../config/fbconfig'
import { deleteUser, signOut } from '../../store/actions/authActions'
import { compose } from 'redux'

class Setting extends Component {


    handleClick = () => {
        const user = firebase.auth().currentUser
        this.props.deleteUser(user)
        this.props.signOut()
        this.props.history.push('/')
    }
    
    render() {
        return (
            <div>
               <Button onClick= {this.handleClick}>Delete My Account</Button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (user) => dispatch(deleteUser(user)) ,
        signOut: () => dispatch(signOut()),
    }
}

export default compose(connect(null, mapDispatchToProps), withRouter)(Setting)
