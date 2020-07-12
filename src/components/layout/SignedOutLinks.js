import React from 'react'
import { NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right" style={signedOutStyle}>
            <NavLink to='/signin' className='signin-link'>Sign-in / Register</NavLink>
        </ul>
    )
}

export default SignedOutLinks

const signedOutStyle = {

}