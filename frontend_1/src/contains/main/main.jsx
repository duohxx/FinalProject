/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable*/ 
/*
Routing component of the main interface
 */

import React, {Component} from 'react'
import { Route, Routes } from "react-router-dom";
import {connect} from 'react-redux'
import Cookies from 'js-cookie' 

import DoctorInfo from '../DoctorInfo/doctorInfo'
import DoctorList from '../doctorList/doctorList'
import CustomerInfo from '../CustomerInfo/customerInfo'

class Main extends Component {

  render() {

    return (
      <div>
          <Routes>
            <Route path="/doctorInfo" element={<DoctorInfo />} />
            <Route path="/customerInfo" element={<CustomerInfo />} />
            <Route path="/doctorList" element={<DoctorList />} />
          </Routes>
      </div>
    )
  }
}

export default connect(
  state => ({}),
  {}
)(Main)

/*
1. Realize automatic login:
1. componentDidMount()
Yes (userid in cookie), but no login (no _id in user managed by Redux) send a request to obtain the corresponding user:
2. render()
1). If there is no userID in the cookie, redirect to login directly
2). Check whether the user managed by Redux has _id. If not, do not display any information temporarily
3). If yes, you have logged in, and the corresponding interface is displayed
4). If the root path is requested: calculate a redirection routing path according to the type and header of the user, and automatically redirect
 */