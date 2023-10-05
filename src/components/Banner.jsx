import React from 'react'
import "../styles/banner.css"
import groupImage from '../assets/computer-store.jpg'
import { motion } from 'framer-motion'

const Banner = () => {
    return (
        <section className='banner--section'>
            <div className="banner">
                <motion.div
                    className="banner--content"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                >
                    <h2>Stay & Save</h2>
                    <h2>Get Your Awesome Discount</h2>
                    <p>It is powered  by a Core i7 processor and it comes with 8GB of RAM.</p>
                </motion.div>
                <div className="banner--image">
                    <motion.img src={groupImage}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2 }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Banner