import React, { Component } from 'react'
import ApplicationItem from './ApplicationItem'

const ApplicationList = ({apps}) =>{
    return (
        <div className="list">
            <p>Application List</p>
            { apps && apps.map(app => {
                return (
                    <ApplicationItem app={app} key={app.id}/>
                )
            })}
        </div>
    ) 
}

export default ApplicationList