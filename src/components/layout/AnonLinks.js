import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


const AnonLinks = (props) => {
    return (
        <ul className="right">
            <li>
                <NavLink to='/anonsignin' style={linkStyle}>Sign-in to Save</NavLink>
            </li>
        </ul>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()) //Prop signOut is the function => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(AnonLinks)

//Styling

const linkStyle = {
    textDecoration: 'none',
    color: 'white'
}