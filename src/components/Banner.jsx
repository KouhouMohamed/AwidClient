import React from 'react'
import "../styles/banner.css"
import groupImage from '../assets/computer-store.jpg'
const Banner = () => {
    return (
        <section className='banner--section'>
            <div className="banner">
                <div className="banner--content">
                    <h2>Stay & Save</h2>
                    <h2>Get Your Awesome Discount</h2>
                    <p>It is powered  by a Core i7 processor and it comes with 8GB of RAM.</p>
                </div>
                <div className="banner--image">
                    <img src={groupImage} />
                </div>
            </div>
        </section>
    )
}

export default Banner