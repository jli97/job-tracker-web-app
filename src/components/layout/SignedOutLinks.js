import React from 'react'
import { NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedOutLinks = (props) => {
    return (
        <ul className="right" style={signedOutStyle}>
            <NavLink to='/signin' className='signin-link'>Sign-in / Register</NavLink>
        </ul>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()) //Prop signOut is the function => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedOutLinks)


const signedOutStyle = {

}