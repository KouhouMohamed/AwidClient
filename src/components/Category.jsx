import React from 'react'
import "../styles/category.css"
import { computerData } from '../data/computerData'

const Category = () => {
    return (
        <section className='category' id='category'>
            <p className="section--slogan">
                Customer Favorites
            </p>
            <h2 className="section--heading">Popular Categories</h2>
            <div className="category--container">
                {
                    computerData.map((data, index) => (
                        <div className="category--box" key={index}>
                            <img className='box--image' src={data.imageUrl} alt={data.label} />
                            <h3 className='box-title'>{data.label}</h3>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Category