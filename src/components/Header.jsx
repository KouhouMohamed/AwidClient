import React from 'react'
import { HiShoppingCart, HiSearch, HiMenu, HiX, HiUserCircle } from 'react-icons/hi';
import "../styles/header.css"
const Header = ({ menuOpen, setMenuOpen }) => {
    const menuIcon = menuOpen ? <HiX /> : <HiMenu />;
    const handleToggle = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <>
            <header className='header'>
                <Navbar setMenuOpen={setMenuOpen} />
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

const Navbar = ({ setMenuOpen }) => {
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
                    <li><a href='#home' onClick={() => setMenuOpen(false)}>Acceill</a></li>
                    <li><a href='#products' onClick={() => setMenuOpen(false)}>Products</a></li>
                    <li><a href='#category' onClick={() => setMenuOpen(false)}>Categories</a></li>
                    <li><a href='#footer' onClick={() => setMenuOpen(false)}>About Us</a></li>
                    <li><a href='#footer' onClick={() => setMenuOpen(false)}>Contact</a></li>
                </ul>
            </nav>
            <div className="nav--icons">
                <HiShoppingCart className='nav--icon' />
                <HiUserCircle className='nav--icon' />
            </div>
        </>
    )
}
export default Header