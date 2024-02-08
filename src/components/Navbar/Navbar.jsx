import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FiBookmark } from "react-icons/fi";
import { IoMdLogIn } from "react-icons/io";
import { useSelector } from 'react-redux';
import { FiMenu } from "react-icons/fi";
// import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const savedJobs = useSelector((state) => state.saveJob);
  const navRef = useRef()
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav')
  }
  return (
    <header>
      <div className="logo-container-responsive">
          <p className='logo-responsive'>BeAChamp<span className='logo-span-responsive'>.</span> </p>
        </div>
      <nav className='navbar' ref={navRef} >
        <div className="logo-container">
          <p className='logo'>BeAChamp<span className='logo-span'>.</span> </p>
        </div>  
        <div className='navLinks'>
          <NavLink
            className='routeLink active'
            to='/'
            style={({ isActive }) => ({
              color: isActive ? 'black' : 'gray',
              fontWeight: isActive ? '600' : '300'
            })} >Home</NavLink>
          <NavLink
            className='routeLink'
            to='/interviewquestions'
            style={({ isActive }) => ({
              color: isActive ? 'black' : 'gray',
              fontWeight: isActive ? '600' : '300'
            })} >Interview Questions</NavLink>
          <NavLink
            className='routeLink'
            to='/placement'
            style={({ isActive }) => ({
              color: isActive ? 'black' : 'gray',
              fontWeight: isActive ? '600' : '300'
            })} >Placement</NavLink>
          <NavLink
            className='routeLink'
            to='/about'
            style={({ isActive }) => ({
              color: isActive ? 'black' : 'gray',
              fontWeight: isActive ? '600' : '300'
            })} >About</NavLink>
        </div>
        <div className="nav-icons">
          <NavLink
            className='routeLink'
            to='/save'
            style={({ isActive }) => ({
              color: isActive ? 'black' : 'gray',
              fontWeight: isActive ? '600' : '300'
            })} ><FiBookmark /><sup>{savedJobs.length}</sup></NavLink>
          <NavLink
            className='routeLink'
            to='/signup'
            style={({ isActive }) => ({
              color: isActive ? 'black' : 'gray',
              fontWeight: isActive ? '600' : '300'
            })} ><IoMdLogIn /></NavLink>
        </div>
      </nav>
      <div className="nav-btn nav-close-btn" onClick={showNavbar} >
        <FiMenu />
      </div>
    </header>
  )
}

export default Navbar