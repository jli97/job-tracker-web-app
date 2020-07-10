import React, { Component } from 'react'
import {Form, Button, Row, Col, Container} from 'react-bootstrap'
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
            <Container style={formStyle}>
                <Form onSubmit={this.handleSubmit}>
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
                        
                        <Button style = {{float:'right', marginRight: '2%'}} variant="success" type="submit">Add</Button>

                    </Row>
                </Form>
            </Container>
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
    width:'100%',
    padding:'0%',
}

const rowStyle = {
    display:'inline-block',
    alignItems: 'center',
    margin:'auto',
    width:'100%',
}

const colStyle = {
    padding: '2%',
}
