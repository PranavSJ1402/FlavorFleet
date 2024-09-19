import React, { useState } from 'react';
import { assets } from '../../assets/assets'; // Remove if assets.logo is no longer needed
import './Navbar.css';
import {Link} from 'react-router-dom'

const Navbar =({setShowLogin}) => {
  const [menu, setMenu] = useState("menu"); 

  return (
    <div className='navbar'>
        <Link to='/'><div className='logo-text'>FlavorFleet</div></Link> 
        <ul className='navbar-menu'>
            <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
            <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "contact-us" ? "active" : ""}>Menu</a>
            <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a>
            <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a>

        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="Search" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="Basket" /></Link>
                <div className="dot"></div>
            </div>
            <button onClick={()=>setShowLogin(true)} id='sign-in'>Sign in</button>
        </div>
    </div>
  );
}

export default Navbar;
