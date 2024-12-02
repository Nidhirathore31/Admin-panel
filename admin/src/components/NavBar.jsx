import React from 'react'
import '../assets/js/core/jquery.3.2.1.min.js'
import List from './List.jsx'



const NavBar = () => {
  return (
    <>
      <div className="main-panel">
        <nav className="navbar navbar-expand-lg " color-on-scroll={500}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#pablo">
              {" "}
              Dashboard{" "}
            </a>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navigation"
            >
              <ul className="nav navbar-nav mr-auto">
                <List listClass="nc-icon nc-palette " />
                <List listClass="nc-icon nc-zoom-split" title="Search" />
              </ul>
              <ul className="navbar-nav ml-auto">
                <List title="Account" />
                <List title="Log Out" />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar