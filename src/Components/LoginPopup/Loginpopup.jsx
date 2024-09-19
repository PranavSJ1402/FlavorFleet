import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img 
            onClick={() => setShowLogin(false)}  
            src={assets.cross_icon} 
            alt="Close"
            className="cross-icon"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <>
              <input type="email" placeholder='Your email' required />
              <input type="password" placeholder='Password' required />
            </>
          ) : (
            <>
              <input type="text" placeholder='Your name' required />
              <input type="email" placeholder='Your email' required />
              <input type="password" placeholder='Password' required />
            </>
          )}
        </div>
        <button className="submit-button">{currState === "Sign Up" ? "Create account" : "Login"}</button>
        
        {currState === "Sign Up" && (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        )}
        
        {currState === "Login" ? (
          <p>
            Create a new account?{' '}
            <span onClick={() => setCurrState("Sign Up")}>Sign up</span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={() => setCurrState("Login")}>Sign in</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
