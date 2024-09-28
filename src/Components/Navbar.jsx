import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import "../index.css"
import logo from "./Assets/logo.png"

function Navbar() {
  return (
    <div className='nav'>
        <div className="menItems">
        <div className="flex">
          <Link to={"/"}>
          <img src={logo} alt='fireSpot'/>
          </Link>
        </div>
            <Link to={"/login"}>
                Login
            </Link>
            <a href={"/signup"}>
                Signup
            </a>
        </div>
      
    </div>
  )
}

export default Navbar
