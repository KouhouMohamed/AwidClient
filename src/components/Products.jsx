import React, { useState } from 'react'
import '../styles/products.css'
import { computerData } from '../data/computerData'
import { motion } from 'framer-motion'
import Product from '../services/Product'
import { HiPlus, HiViewBoards } from 'react-icons/hi'

const Products = () => {
    const [data, setData] = useState([]);
    const imagesHost = "src/assets/";
    var product = new Product();
    product.getproducts((response) => {
        setData(response)
    });
    //console.log(data)
    return (
        <section
            className='products'
            id='products'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
        >

            <div className="products--container"  >
                {
                    data.map((prod, index) =>
                    (
                        <div className="product--box" key={index}>
                            <img className='product--image' src={imagesHost + prod.image} alt={imagesHost + prod.imageUrl} />
                            <h1 className="product--title">
                                {prod.label}
                            </h1>
                            <div className='product--row'>
                                <button className='product--btn'><HiPlus className='product--icon' />Ajouter</button>
                                <h4 className='product--price'>{prod.price} DH</h4>
                                <button className='product--btn'><HiViewBoards className='product--icon' />Détails</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Products