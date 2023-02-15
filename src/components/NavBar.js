import React from 'react'
import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

import '../pages/Home';
import '../pages/PageOne';
import '../pages/PageTwo';
import '../pages/PageThree';


function NavBar() {

    const navRef = useRef();

    const smallNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }






  return (
    <header>
        <NavLink to='/Home'>
            <h3 className='the-logo'>Flood.Monitoring</h3>
        </NavLink>
        <nav ref={navRef}>
            <a href='/Home'>Home</a>
            <a href='/PageOne'>PageOne</a>
            <a href='/PageTwo'>PageTwo</a>
            <a href='/PageThree'>PageThree</a>
            
            <button className='nav-btn nav-close-btn' onClick={smallNavBar}>
                <FaTimes/>
            </button>
        </nav>

        <button className='nav-btn' onClick={smallNavBar}>
            <FaBars/>
        </button>

    </header>
  )
}

export default NavBar
