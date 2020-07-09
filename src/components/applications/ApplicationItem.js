import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteApp } from '../../store/actions/appActions'
import { updateStatusApp } from '../../store/actions/appActions'
import {Button, Dropdown, Container, Row, Col} from 'react-bootstrap'

class ApplicationItem extends Component{

        handleDelete = (e) =>{
            e.preventDefault();
            const { id } = this.props.app;
            this.props.deleteApp(id);
        }

        handleDropdownAction = (e) => {
            const appId = this.props.app.id;
            this.props.updateStatusApp(appId, e.target.id)
        }

        render(){
            return (
            
            <Container style={applicationItemStyle}>
                <div>
                    <div style={textStyle}>{this.props.app.company + ' | ' + this.props.app.job_title + ' - '+ this.props.app.status}</div>

                    <Button style={rmBtnStyle} onClick={this.handleDelete}>Remove</Button>
                    <Dropdown style={actionBtnStyle}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Action
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item id='Applied' onClick={this.handleDropdownAction}>Applied</Dropdown.Item>
                            <Dropdown.Item id='Interview' onClick={this.handleDropdownAction}>Interview</Dropdown.Item>
                            <Dropdown.Item id='Offer' onClick={this.handleDropdownAction}>Offer</Dropdown.Item>
                            <Dropdown.Item id='Rejected' onClick={this.handleDropdownAction}>Rejected</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>
            </Container>
            
            )
        }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteApp: (id) => dispatch(deleteApp(id)),
        updateStatusApp: (id, status) => dispatch(updateStatusApp(id, status))
    }
}

export default connect(null, mapDispatchToProps)(ApplicationItem)


/* Styling */

const applicationItemStyle = {
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: '1px',
    marginTop:'-1px',
    padding: '1%',
    overflow: 'hidden',
    textAlign: 'center',
    width: '100%',
}

const textStyle = {
    float: 'left',
}

const rmBtnStyle = {
    background: '#ff0000',
    color: '#fff',
    float:'right',
    marginLeft: '5px',
    width:'80px',
    padding: '0px'
}

const actionBtnStyle = {
    color: '#DFDFDF',
    float:'right',
    verticalAlign:'text-bottom',
    position:'static'
}