import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import "../index.css"

function Navbar() {
  return (
    <div className='nav'>
        <div className="flex">
                <h2>Sajilo Charge</h2>
        </div>
        <div className="menItems">
            <Link to={"/"}>
                Home
            </Link>
            <Link to={"/login"}>
                Login
            </Link>
            <Link to={"/signup"}>
                Signup
            </Link>
        </div>
      
    </div>
  )
}

export default Navbar
