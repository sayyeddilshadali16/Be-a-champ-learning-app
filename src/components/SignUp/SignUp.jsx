import React from 'react';
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='signup-container'>
      <h1>SignUp <span>.</span> </h1>
    <div className="login-signup">
      <input className='signup-input' type="text" placeholder='Email' />
      <input className='signup-input' type="password" placeholder='Create password' />
      <input className='signup-input' type="password" placeholder='Password' />
      <button className='signup-button' >SignUp</button>
    </div>
    </div>
  )
}

export default SignUp