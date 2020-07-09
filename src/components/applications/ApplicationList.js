import React from 'react'
import ApplicationItem from './ApplicationItem'
import {Container , Row} from 'react-bootstrap'

const ApplicationList = ({apps}) =>{
    return (
        <Container style={appListStyle}>
            { apps && apps.map(app => {
                return (
                    <Row style={rowStyle}>
                        <ApplicationItem app={app} key={app.id}/>
                    </Row>
                )
            })}
        </Container>
    ) 
}

export default ApplicationList

/* Styling */
const appListStyle = {
    borderTop: 'solid',
    borderColor: 'gray',
    borderWidth: '1px',
    overflow: 'hidden',
    width: '100%',
    background: '#DFDFDF',
    padding: '0'
}

const rowStyle = {
    margin: '0%',
    width: '100%',
    padding: '0',
}
