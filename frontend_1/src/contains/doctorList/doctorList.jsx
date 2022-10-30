/* eslint-disable*/ 
/*
Customer information complete component
*/
import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {getUserList} from '../../redux/actions'

class DoctorList extends Component{

    static propTypes = {
        userList: PropTypes.array.isRequired
    }

    componentDidMount () {
        // Get Gets the userList
        this.props.getUserList('Doctor')
    }

    render(){
        const {userList} = this.props
        return(
            <div>
                {
                userList.map(user => (
                    <div key={user._id}>
                        <div>User Name: {user.username}</div>
                    </div>
                ))
                }
            </div>
        )
    }
}

export default connect(
    state => ({userList: state.userList}),
    {getUserList}
)(DoctorList)