import React from 'react'
import "../styles/home.css"
import { HiOutlinePlay } from 'react-icons/hi'
import homeImage from '../assets/home-image.jpg'

const Home = () => {
    return (
        <section className='home' id='home'>
            <div className="home--content">
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
            </div>
            <div className="home--image">
                <img src={homeImage} />
            </div>
        </section>
    )
}

export default Home