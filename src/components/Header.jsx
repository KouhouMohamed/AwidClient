import React, { useState } from 'react'
import { HiShoppingCart, HiSearch, HiMenu, HiX, HiUserCircle } from 'react-icons/hi';
import "../styles/header.css"
import Product from '../services/Product';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ menuOpen, setMenuOpen, showLogin, setShowLogin }) => {
    const menuIcon = menuOpen ? <HiX /> : <HiMenu />;
    const [openProfile, setOpenProfile] = useState(false)
    const [isLogin, setIsLogin] = useState(true);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    }
    const handleDropDownList = () => {
        if (isLogin === true)
            setOpenProfile(!openProfile)
        else
            setShowLogin(true)
    }
    return (
        <>
            <header className='header'>
                <Navbar
                    setMenuOpen={setMenuOpen}
                    showLogin={showLogin}
                    setIsLogin={setIsLogin}
                    open={openProfile}
                    setOpen={handleDropDownList}
                    setOpenProfile={setOpenProfile}
                />
            </header>
            <button className="burger--menu" onClick={handleToggle}>
                {menuIcon}
            </button>
        </>
    )
}

export const ResponsiveMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`res--menu ${menuOpen ? 'res--menu-open' : ''}`}>
            <Navbar setMenuOpen={setMenuOpen} />
        </div>
    )
}

const Navbar = ({ setMenuOpen, setIsLogin, open, setOpen, setOpenProfile }) => {
    return (
        <>
            <nav className="header--nav">
                <div className="nav--logo">
                    <a href="#home" onClick={() => setMenuOpen(false)}>
                        <h2>Info Boussairi</h2>
                    </a>
                </div>
                <div className="nav--divider"></div>
                <ul className="nav--list">
                    <li><a href='/' onClick={() => setMenuOpen(false)}>Acceill</a></li>
                    <li><a href='/products' onClick={() => setMenuOpen(false)}>Products</a></li>
                    <li><a href='/categories' onClick={() => setMenuOpen(false)}>Categories</a></li>
                    <li><a href='#footer' onClick={() => setMenuOpen(false)}>About Us</a></li>
                    <li><a href='#footer' onClick={() => setMenuOpen(false)}>Contact</a></li>
                </ul>
            </nav>
            <div className="nav--icons">
                <HiShoppingCart className='nav--icon' />
                <HiUserCircle onClick={() => setOpen()} className='nav--icon' onmou />
            </div>
            {
                open && (<DropDownProfile setIsLogin={setIsLogin} setOpenProfile={setOpenProfile} />)
            }
        </>
    )
}
const DropDownProfile = ({ setIsLogin, setOpenProfile }) => {
    return (
        <div className='dropdownprofile'>
            <ul>
                <button className='dropdown--button'><li>Profile</li></button>
                <button className='dropdown--button'><li>Gestion</li></button>
                <button className='logout' onClick={() => { setOpenProfile(false); setIsLogin(false) }}><li>Logout</li></button>
            </ul>
        </div>
    )
}
export default Header