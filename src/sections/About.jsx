import React from 'react';
import { motion } from 'framer-motion'; 
import Abtimg from '../assets/Proyecto_05.jpg'

const About = () => {
    return (
        <section className='p-10'>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.3 }} // 👈 triggers every time 50% is in view
            >

                <div className='flex flex-wrap w-full justify-between'>
                    <div className="w-1/2">
                       <img src={Abtimg} alt="" />
                    </div>  
                    <div className="w-1/2">
                        <h2 className="text-2xl text-gray-800">Sobre a</h2>
                        <p>Future Marketing
                        </p>
                    </div>
                </div>


            </motion.div>
        </section>
    );
};

export default About;
