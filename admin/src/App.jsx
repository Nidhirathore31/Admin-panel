import { useState } from 'react'
import './App.css'
import Routing from './Routes/Routing'
import './assets/css/bootstrap.min.css'
import './assets/css/demo.css'
import './assets/css/light-bootstrap-dashboard.css'
import './BS3/assets/css/animate.min.css'
import './BS3/assets/css/bootstrap.min.css'
import './BS3/assets/css/demo.css'
import './BS3/assets/css/light-bootstrap-dashboard.css'
import './BS3/assets/css/pe-icon-7-stroke.css'
import { BrowserRouter } from 'react-router-dom'


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routing/>
    </BrowserRouter>
    </>
  )
}

export default App
