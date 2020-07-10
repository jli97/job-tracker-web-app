import React, { Component } from 'react'
import ApplicationList from '../applications/ApplicationList'
import NewAppForm from '../applications/NewAppForm'
import { connect } from 'react-redux' //Connects this component to the redux store
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux' 
import { Container, Row, Col, Dropdown} from 'react-bootstrap'

class Home extends Component {
    
    render() {
        const { apps, profile, auth } = this.props
        const name = profile.isEmpty ?  'Someone\'s List' : (profile.firstname + '\'s List')
        console.log(this.props)
        
        return (
            <Container style={homePageStyle}>
                <Row style = {headerStyle}>
                    <Col style={hdrTextStyle}>
                        <p>{name}</p>
                    </Col>
                    <Col>
                    <Dropdown>
                        <Dropdown.Toggle icon={null} variant="success" id="dropdown-basic">
                        +
                        </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <NewAppForm/>
                            </Dropdown.Menu>
                    </Dropdown>
                    </Col>
                    <Col style={hdrFormStyle}>
                        <NewAppForm/>
                    </Col>
                </Row>
                <Row style={listStyle}>
                    <ApplicationList apps={apps}/>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => { //connect() users this function to connect this component to the reducer
    console.log(state)
    return {
        apps: state.firestore.ordered.apps, //This points to the reducer state and where it stores the data
        firebase: state.firebase, //Used to get uid to point fireStoreConnect to the right app_list
        profile: state.firebase.profile,
        auth: state.firebase.auth,
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => {
        const authId = props.firebase.auth.uid == null ? "placeholder" : props.firebase.auth.uid;
        return ([
          {
            collection: "users",
            doc: authId,
            subcollections: [{ collection: "app_list", orderBy: ['unix', 'desc']}], //This orders the data by time created in the reducer state
            storeAs:'apps'
          }
        ])
    })
)(Home) 

/* Styling */

const homePageStyle = {
    borderColor: 'green',
    marginTop: '1%',
    padding: '0%',
    width: '100%'
}

const headerStyle = {
    borderStyle: 'solid',
    padding: '0%',
    margin:'auto',
    width: '100%',
}

const hdrTextStyle = {
    alignItems: 'center',
    fontSize: 'xx-large',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'end', 
}

const addBtnStyle = {
    borderRadius:'50%'
}
const hdrFormStyle = {
    padding:'0',
    textAlign: 'bottom',
    verticalAlign: 'middle'
}

const listStyle = {
    padding:'0%',
    margin:'0px',
}
