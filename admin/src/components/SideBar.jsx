import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import List from './List'

const SideBar = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="sidebar" data-image="../assets/img/sidebar-5.jpg">
  <div className="sidebar-wrapper">
    <div className="logo">
      <a href="http://www.creative-tim.com" className="simple-text">
        Creative Tim
      </a>
    </div>
    <ul className="nav">
      <List title="Dashboard" onClick={()=>navigate("/dashboard")} listClass="nc-icon nc-chart-pie-35"/>
      <List title="User Profile" onClick={()=>navigate("/user")} listClass="nc-icon nc-circle-09"/>
      <List title="Table List" onClick={()=>navigate("/table")} listClass="nc-icon nc-notes"/>
      <List title="Typography" onClick={()=>navigate("/typo")} listClass="nc-icon nc-paper-2"/>
      <List title="Icons" onClick={()=>navigate("/icon")} listClass="nc-icon nc-atom"/>
      <List title="Notifications" onClick={()=>navigate("/notification")} listClass="nc-icon nc-bell-55"/>
      <List title="Upgrade to PRO" onClick={()=>navigate("/upgrade")} listClass="nc-icon nc-alien-33"/>
    </ul>
  </div>
</div>
    </>
  )
}
export default SideBar