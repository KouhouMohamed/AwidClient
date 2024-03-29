import React, { useState } from 'react'
import "../styles/home.css"
import { HiOutlinePlay } from 'react-icons/hi'
import homeImage from '../assets/home-image.jpg'
import { motion } from 'framer-motion'
import Header, { ResponsiveMenu } from './Header'
import Category from './Category'
import Products from './products'
import Footer from './Footer'

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            {showLogin && <Login setShowLogin={setShowLogin} />}
            {
                !showLogin &&
                <>
                    <section className='home' id='home'>
                        <motion.div
                            className="home--content"
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2 }}
                        >
                            <h2 className='home--title'>
                                Meilleure  <span className='span--q'>Qualité</span>
                                <br /> à <span className='span--p'>Petit</span> Prix
                            </h2>

                            <p className="home--description">
                                Dell Latitude E7450 is a Windows 10 laptop with a
                                14.00-inch display that has a resolution of 1366x768 pixels.
                                It is powered  by a Core i7 processor and
                                it comes with 8GB of RAM. The Dell Latitude E7450 packs 256GB
                                of HDD storage.
                            </p>
                            <div className="home--buttons">
                                <button className='btn--1'>Adport Now</button>
                                <button className='btn--2'>
                                    <HiOutlinePlay className='btn--icon' alt='laptope' /> Watch Video
                                </button>
                            </div>
                        </motion.div>
                        <motion.div
                            className="home--image"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2 }}
                        >
                            <img src={homeImage} />
                        </motion.div>
                    </section>
                    <div className='div--title'>
                        <p className="section--slogan">
                            Customer Favorites
                        </p>
                        <h2 className="section--heading">Popular Categories</h2>
                    </div>
                    <Category />

                    <div className='div--title'>
                        <p className="section--slogan">
                            Recommandation
                        </p>
                        <h2 className="section--heading">
                            Best Choice
                        </h2>
                    </div>
                    <Products />
                </>
            }
        </>
    )
}

export default Home