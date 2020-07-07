import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
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
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group onChange={this.handleChange} controlId="job_title">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control/>
                    </Form.Group>

                    <Form.Group onChange={this.handleChange} controlId="company">
                        <Form.Label>Company</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Button variant="success" type="submit">Add</Button>
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

