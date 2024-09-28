import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import "../index.css"
import logo from "./Assets/logo.png"

function Navbar() {
  return (
    <div className='nav'>
        
        <div className="">
          <Link to={"/"}>
          <img src={logo} alt='fireSpot'/>
          </Link>
        </div>
        <div className='flex' style={{
            width:350,
           
            height:48,
        }}>
            <Link to={"/login"} className='button text-decoration-none primary'>
                Login
            </Link>
            <Link to={"/signup"} className='button text-decoration-none secondary'>
                Signup
            </Link>
        </div>
        
      
    </div>
  )
}

export default Navbar
