import React from 'react'
import { HiShoppingCart, HiSearch, HiMenu, HiX } from 'react-icons/hi';
import "../styles/header.css"
const Header = ({ menuOpen, setMenuOpen }) => {
    const menuIcon = menuOpen ? <HiX /> : <HiMenu />;
    const handleToggle = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <>
            <header className='header'>
                <Navbar />
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
            <Navbar />
        </div>
    )
}

const Navbar = () => {
    return (
        <>
            <nav className="header--nav">
                <div className="nav--logo">
                    <a href="#">
                        <h2>Info Boussairi</h2>
                    </a>
                </div>
                <div className="nav--divider"></div>
                <ul className="nav--list">
                    <li><a href='#home'>Acceil</a></li>
                    <li><a href='#services'>Services</a></li>
                    <li><a href='#category'>Categories</a></li>
                    <li><a href='#about'>About Us</a></li>
                    <li><a href='#footer'>Contact</a></li>
                </ul>
            </nav>
            <div className="nav--icons">
                <HiShoppingCart className='nav--icon' />
                <HiSearch className='nav--icon' />
            </div>
        </>
    )
}
export default Header