import React from 'react';
import './LoginForm.css';
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";


const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
         <h1>Login</h1>
         <div >
         <div className="input-box">
            <input type="text" placeholder='Email' className='input_form' required/>
            <MdOutlineMail className="icon" />
         </div>
         <div className="input-box">
            <input type="Password" placeholder='Password' className='input_form' required/>
            <RiLockPasswordLine className="icon" />
         </div>
         </div>
         <div className="remember-forgot">
           <label style={{
            marginRight:30,
           }}><input type="checkbox"/>Remember me</label> 
            <a href="#">Forget Password</a>
         </div>

         <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default LoginForm
