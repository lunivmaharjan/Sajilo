import React from 'react';
import './SigninForm.css';

const SigninForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Sign In</h1>
            <div className='input-box'>
                <input type="text" placeholder='First Name' required/>
            </div>
            <div className='input-box'>
                <input type="text" placeholder='Last Name' required/>
            </div>
            <div className='input-box'>
                <input type="text" placeholder='Email' required/>
            </div>
            <div className='input-box'>
                <input type="text" placeholder='Contact(Optional)' required/>
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Password' required/>
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Confirm Password' required/>
            </div>
            <div className='remember-forgot'>
                <label><input type="checkbox" />I agree to all terms and policies</label>
            </div>

            <button type="submit">Sign In</button>
        </form>
    </div>
  )
}

export default SigninForm
