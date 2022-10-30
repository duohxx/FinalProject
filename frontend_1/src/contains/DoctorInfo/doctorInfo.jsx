/* eslint-disable*/ 
/*
Doctor information complete component
*/
import React, {Component} from 'react'
import { connect } from 'react-redux'
import Infos from '../../components/UserInfo/Infos'

class DoctorInfo extends Component{
    render(){
        return(
            <div>
                <Infos usertype={"Doctor"}/>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(DoctorInfo)