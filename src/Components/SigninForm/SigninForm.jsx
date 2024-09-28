import React from 'react';
import '../../index.css';
import './SigninForm.css';


const SigninForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Register</h1>
            <div> 

            <div className='input-box'>
                <input type="text" placeholder='First Name'className='input_form' required/>
            </div>
            <div className='input-box'>
                <input type="text" placeholder='Last Name'className='input_form' required/>
            </div>
            <div className='input-box'>
                <input type="text" placeholder='Email'className='input_form' required/>
            </div>
            <div className='input-box'>
                <input type="text" placeholder='Contact (Optional)'className='input_form' required/>
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Password'className='input_form' required/>
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Confirm Password'className='input_form' required/>
            </div>
            <div className='remember-forgot'>
                <label><input type="checkbox" />I agree to all terms and policies</label>
            </div>

            </div>
            
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default SigninForm
