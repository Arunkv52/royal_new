import React from 'react';
import { motion } from 'framer-motion';
import Abtimg from '../assets/Proyecto_05.jpg'

const About = () => {
    return (
        <section className='md:py-20 py-10 md:px-10 px-0'>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.3 }} // 👈 triggers every time 50% is in view
            >
                <div className='md:flex py-15 w-full'>
                    <div className="md:w-1/2 w-full md:px-5 px-3">
                        <p className='text-gray-900 text-[14px]'>About</p>
                        <h2 className="md:text-7xl text-4xl font-bold md:pb-10 pb-5">Transforming defense capabilities with advanced technology.
                        </h2>
                        <p className='md:text-[24px] text-[18px] py-3'>The battlefield has changed. How we deter & defend needs to change too.</p>
                        <p className='md:text-[24px] text-[18px]'>Security threats are evolving at machine speed. To keep pace, Anduril puts products ahead of process and builds technology to bring the United States and partners quantum leaps ahead in capability.
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full md:p-10 p-3">
                        <img src={Abtimg} alt="" />
                    </div>

                </div>


            </motion.div>
        </section>
    );
};

export default About;
