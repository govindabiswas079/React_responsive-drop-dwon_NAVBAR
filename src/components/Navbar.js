import React, { useState } from 'react';
import './Navbar.css';
import closeIcon from '../img/close.svg';
import { Link } from 'react-router-dom'

function Navbar() {
  const [nav, setNav] = useState(false)
  const [click, setClick] = useState(false);
  const [subClick1, setSubClick1] = useState(false)
  const [subClick2, setSubClick2] = useState(false)

  const handleClick = () => setClick(!click);
  const handleClose = () => setClick(false);

  const subClickOpen1 = () => setSubClick1(!subClick1);
  const subClickOpen2 = () => setSubClick2(!subClick2);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <header className={nav ? "header active" : "header"}>
        <div className="container">
          <div className="header-main">
            <div className="logo">
              <Link to="/">Logo</Link>
            </div>
            <div className="open-nav-menu" onClick={handleClick}>
              <span></span>
            </div>
            <div className={click ? "menu-overlay" : "menu-overlay"}>
            </div>
            <nav className={click ? "nav-menu open" : "nav-menu"}>
              <div className="close-nav-menu">
                <img src={closeIcon} alt="close" onClick={handleClose} />
              </div>
              <ul className="menu">
                <li className={subClick1 ? "menu-item menu-item-has-children active" : "menu-item menu-item-has-children"}>
                  <Link to="/" data-toggle="sub-menu" onClick={subClickOpen1}>Home <i className="plus"></i></Link>
                  <ul className={subClick1 ? "sub-menu active" : "sub-menu"}>
                    <li className="menu-item"><Link to="/" onClick={handleClose}>Home 1</Link></li>
                    <li className="menu-item"><Link to="/" onClick={handleClose}>Home 2</Link></li>
                    <li className="menu-item"><Link to="/" onClick={handleClose}>Home 3</Link></li>
                    <li className="menu-item"><Link to="/" onClick={handleClose}>Home 4</Link></li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link to="/" onClick={handleClose}>About</Link>
                </li>
                <li className="menu-item">
                  <Link to="/" onClick={handleClose}>Services</Link>
                </li>
                <li className={subClick2 ? "menu-item menu-item-has-children active" : "menu-item menu-item-has-children"}>
                  <Link to="/" data-toggle="sub-menu" onClick={subClickOpen2}>Pages <i className="plus"></i></Link>
                  <ul className={subClick2 ? "sub-menu active" : "sub-menu"}>
                    <li className="menu-item"><Link to="/" onClick={handleClose}>page 1</Link></li>
                    <li className="menu-item"><Link to="/" onClick={handleClose}>page 2</Link></li>
                    <li className="menu-item"><Link to="/" onClick={handleClose}>page 3</Link></li>
                    <li className="menu-item"><Link to="/" onClick={handleClose}>page 4</Link></li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link to="/" onClick={handleClose}>News</Link>
                </li>
                <li className="menu-item">
                  <Link to="/" onClick={handleClose}>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <section className="home-section">
      </section>
    </>
  );
}

export default Navbar;