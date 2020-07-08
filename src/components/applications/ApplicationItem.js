import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteApp } from '../../store/actions/appActions'

class ApplicationItem extends Component{

        handleDelete = (e) =>{
            e.preventDefault();
            const { id } = this.props.app;
            this.props.deleteApp(id);
        }

        render(){
            return (

            <div className="align-middle">
                <span>
                    <p>{this.props.app.company + ' | ' + this.props.app.job_title + ' - '+ this.props.app.status}</p>
                    <button onClick={this.handleDelete}>Remove</button>
                    <button>Action</button>
                </span>
            </div>
            )
        }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteApp: (id) => dispatch(deleteApp(id))
    }
}

export default connect(null, mapDispatchToProps)(ApplicationItem)
