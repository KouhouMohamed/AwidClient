import React from 'react'
import '../styles/footer.css'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <motion.section
            id='footer'
            className="footer"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
        >
            <div className="footer--news--feed">
                <div className="news--feed--text">
                    <h3>Subscribe Our News Letter!</h3>
                </div>
                <div className="news--feed--input">
                    <input type="text" placeholder='Enter your Email' />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="footer--menu">
                <ul className="footer--menu--list">
                    <li><a href='#home'>Acceill</a></li>
                    <li><a href='#category'>Categories</a></li>
                    <li><a href='#about'>Contact</a></li>
                </ul>
                <div className="footer--menu--icons">
                    <BsFacebook />
                    <BsInstagram />
                    <BsTwitter />
                    <BsYoutube />
                </div>
            </div>
            <div className="footer--breaker">
            </div>
            <div className="footer--credits">
                <p>@ 2023 - InfoBoussairi All rights reserved.</p>
            </div>
        </motion.section>
    )
}

export default Footer