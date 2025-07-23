import React from 'react'
import Mytabs from '../components/Mytabs'
import { motion } from 'framer-motion';



const Products = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className="prod md:py-20 py-5 md:px-10 px-3">
                    <div className="prod-texts md:py-10 py-5">
                        <h1 className='text-left mt-2 md:text-7xl text-3xl font-semibold'>Unlock Your Team's
                            True Potential</h1>
                        <p className='py-5'>Whether you’re scheduling, operating machines, tracking KPIs.
                        </p>
                    </div>
                    <div className="tabs-container md:pb-20">
                        <Mytabs />
                    </div>
                </div>

            </motion.div>


        </>
    )
}

export default Products