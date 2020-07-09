import React, { Component } from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import { createApp} from '../../store/actions/appActions'
import { connect } from 'react-redux'

class NewAppForm extends Component {
    

    state = {
        company: '',
        job_title: ''
    }
    

    handleChange = (e) => {
        const value = e.target.value;
    
        this.setState({
            ...this.state,
            [e.target.id]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createApp(this.state)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} style={formStyle}>
                    <Row style = {rowStyle}>
                        <Col style = {colStyle}>
                            <Form.Group onChange={this.handleChange} controlId="job_title">
                                <Form.Control placeholder="Job Title"/>
                            </Form.Group>
                        </Col>
                        <Col style = {colStyle}>
                            <Form.Group onChange={this.handleChange} controlId="company">
                                <Form.Control placeholder="Company"/>
                            </Form.Group>
                        </Col>
                        <Col style = {colStyle}>
                            <Button variant="success" type="submit">Add</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createApp: (app) => dispatch(createApp(app))
    }
}

export default connect(null, mapDispatchToProps)(NewAppForm)

/* Styling */

const formStyle = {
    border: 'solid',
    
}

const rowStyle = {
    alignItems: 'flex-end'
}

const colStyle = {
    
}

