import React from 'react'
import '../styles/products.css'
import { computerData } from '../data/computerData'
import { motion } from 'framer-motion'

const Products = () => {
    return (
        <motion.section
            className='products'
            id='products'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
        >
            <p className="section--slogan">
                Recommandation
            </p>
            <h2 className="section--heading">
                Best Choice
            </h2>
            <div className="products--container"  >
                {
                    computerData.map((data, index) =>
                    (
                        <div className="product--box" key={index}>
                            <img className='product--image' src={data.imageUrl} alt={data.label} />
                            <h1 className="product--title">
                                {data.label}
                            </h1>
                            <h4 className='product--price'>{data.price}</h4>
                        </div>
                    ))
                }
            </div>
        </motion.section>
    )
}

export default Products