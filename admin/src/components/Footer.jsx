import React from 'react';
import './Footer.css'
import List from './List';


const Footer = () => {
  return (
    <>
       <div className="">
        <div className="main-panel"> 
          <footer className="footer fixed-footer">
            <div className="container-fluid">
              <nav>
                <ul className="footer-menu">
                <List title="Home"/>
                  <List title="Company"/>
                  <List title="Portfolio"/>
                <List title="Blog"/>
                </ul>
                <p className="copyright text-center">
                  ©<a href="http://www.creative-tim.com">Creative Tim</a>, made with love
                  for a better web
                </p>
              </nav>
            </div>
          </footer>
        </div>
      </div> 
    </>
  );
};

export default Footer;
