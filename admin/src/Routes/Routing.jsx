import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import DashBoard from '../pages/DashBoard'
import Notification from '../pages/Notification'
import Typography from '../pages/Typography'
import Upgrade from '../pages/Upgrade'
import User from '../pages/User'
import NavBar from './../components/NavBar';
import SideBar from '../components/SideBar'
import Footer from './../components/Footer';
import TableData from '../pages/TableData'
import IconData from '../pages/IconData'

const Routing = () => {
  return (
   <>
    <NavBar/>
    <SideBar/>
    <Routes>
       <Route path='/dashboard' element={<DashBoard/>}></Route>
       <Route path='/icon' element={<IconData/>}></Route>
       <Route path='/notification' element={<Notification/>}></Route>
       <Route path='/table' element={<TableData/>}></Route>
       <Route path='/typo' element={<Typography/>}></Route>
       <Route path='/upgrade' element={<Upgrade/>}></Route>
       <Route path='/user' element={<User/>}></Route>
    </Routes>
   <Footer/>
   </>
  )
}

export default Routing
