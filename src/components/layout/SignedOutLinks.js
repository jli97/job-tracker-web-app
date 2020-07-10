import React from 'react'
import { NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/signin' className='signin-link'>Sign-in / Register</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks