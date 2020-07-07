import React from 'react'

const ApplicationItem = ({app}) => {

        return (
            <div className="align-middle">
                <p>
                    <p>{app.title}</p>
                    <button>Remove</button>
                    <button>Action</button>
                </p>
            </div>
        )
}

export default ApplicationItem
