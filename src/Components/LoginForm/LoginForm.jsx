import React from 'react';
import './LoginForm.css';
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";


const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
         <h1>Login</h1>
         <div className="input-box">
            <input type="text" placeholder='Email' required/>
            <MdOutlineMail className="icon" />
         </div>
         <div className="input-box">
            <input type="Password" placeholder='Password' required/>
            <RiLockPasswordLine className="icon" />
         </div>
         <div className="remember-forgot">
           <label><input type="checkbox"/>Remember me</label>
            <a href="#">Forget Password</a>
         </div>

         <button type="submit">Login</button>

         <div className="register-link">
           <p>Don't have an account? <a href="#">Register</a></p>
         </div>
        </form>
    </div>
  )
}

export default LoginForm
