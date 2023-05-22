import React from 'react'
import './navbar.css'
import logo from '../../assets/Logo.png'

const Menu = () => (
 <>
  <p><a href="#">Home</a></p>
  <p><a href="#">Browse</a></p>
  <p><a href="#">Updates</a></p>
  <p><a href="#">Pircing</a></p>
  
 </>
)

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className='navbar-links'>
                <div className='navbar-links_logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='navbar-links_container'>
                    <Menu/>
                </div>
            </div>
            
            <div className='navbar-sing'>
                <button type='button'>Sing up</button>
            </div>
        </div>
    )
}

export default Navbar