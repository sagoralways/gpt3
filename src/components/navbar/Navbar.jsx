import React, { Fragment, useState } from 'react'
import './navbar.css';
import logo from '../../assets/logo.svg'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => {
    return <Fragment>
       <p><a href="#home">Home</a></p>
          <p><a href="#whatGPT3">What is GPT3</a></p>
          <p><a href="#features">Open AI</a></p>
          <p><a href="#possibility">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
    </Fragment>
  }
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
         <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
          <p>Sign In</p>
          <button type='button'>Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={ () => setToggleMenu(false)}/> : <RiMenu3Line color='#fff' size={27} onClick={ () => setToggleMenu(true)} />}

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <Menu />
        <div className="gpt3__navbar-menu_container-sign">
          <p>Sign In</p>
          <button type='button'>Sign Up</button>
      </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar