import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { Dropdown } from 'react-bootstrap'


const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li>
                <Dropdown>
                        <Dropdown.Toggle className='btn btn-floating gray lighten-1' variant="success" bsPrefix="dropdown-toggle-usericon">
                            {props.profile.initials}
                        </Dropdown.Toggle >
                            <Dropdown.Menu>
                                <NavLink to='/settings' className="user-menu-items">Settings</NavLink>
                                <NavLink to='/' onClick={props.signOut} className="user-menu-items">Logout</NavLink>
                            </Dropdown.Menu>
                </Dropdown>
            </li>
        </ul>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()) //Prop signOut is the function => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)



