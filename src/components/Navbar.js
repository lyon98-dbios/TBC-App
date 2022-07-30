import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from '../Logo/WhiteLogo.png';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={logo} alt="Logo" height={60} width={55n}  />
          </Link>
          <div className='menu-icon' onClick={handleClick}> 
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/blog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/programmes'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Programmes
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/media'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Media
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to='get-involved'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Get Involved
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Get Involved</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
