import React from 'react'

const ApplicationItem = ({app}) => {

        return (
            <div className="align-middle">
                <span>
                    <p>{app.company +' | '+app.job_title}</p>
                    <button onClick={removeApp}>Remove</button>
                    <button>Action</button>
                </span>
            </div>
        )
}

export default ApplicationItem
