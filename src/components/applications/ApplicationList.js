import React from 'react'
import ApplicationItem from './ApplicationItem'
import styled from 'styled-components'

const ApplicationList = ({apps}) =>{
    return (
        <ApplicationListWrapper>
            <p>Application List</p>
            { apps && apps.map(app => {
                return (
                        <ApplicationItem app={app} key={app.id}/>
                )
            })}
        </ApplicationListWrapper>
    ) 
}

export default ApplicationList

/* Styled Components */
const ApplicationListWrapper = styled.ul`
    border-style: solid;
    border-color: blue;
`
