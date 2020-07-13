import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { Dropdown, Button } from 'react-bootstrap'
import { compose } from 'redux'


const SignedInLinks = (props) => {
    const handleClick = (e) => {
        props.signOut()
        props.history.push('/')
    }

    return (
        <ul className="right">
            <li>
                <Dropdown>
                        <Dropdown.Toggle className='btn btn-floating gray lighten-1' variant="success" bsPrefix="dropdown-toggle-usericon">
                            {String(props.profile.displayName).charAt(0)}
                        </Dropdown.Toggle >
                            <Dropdown.Menu>
                                <NavLink to='/settings' className="user-menu-items">Settings</NavLink>
                                <NavLink to='/' onClick={handleClick} className="user-menu-items">Logout</NavLink>
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

export default compose(connect(null, mapDispatchToProps), withRouter)(SignedInLinks)



