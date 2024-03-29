import "../styles/category.css"
import { computerData } from '../data/computerData'
import { motion } from 'framer-motion'

const Category = () => {

    return (
        <section
            className='category'
            id='category'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
        >
            <motion.div
                className="category--container"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
            >
                {
                    computerData.map((data, index) => (
                        <div className="category--box" key={index}>
                            <img className='box--image' src={data.imageUrl} alt={data.label} />
                            <h3 className='box-title'>{data.label}</h3>
                        </div>
                    ))
                }
            </motion.div>
        </section>
    )
}

export default Category