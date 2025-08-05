import React from "react";
import { motion } from "framer-motion";
import Abtimg from "../assets/marine-off.jpeg";

const About = () => {
  return (
    <section className="md:py-20 py-10 md:px-10 px-0" id="About">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // 👈 triggers every time 50% is in view
      >
        <div className="md:flex py-15 w-full">
          <div className="md:w-1/2 w-full md:px-5 px-3">
            <p className="text-[#e15425] text-[14px]">About</p>
            <h2 className="md:text-7xl text-4xl font-bold md:pb-10 pb-5">
              Your Trusted Partner in Marine & Offshore Supply
            </h2>
           
            <p className="md:text-[22px] text-[18px]">
              Royal Synergy Pte. Ltd. specializes in marine and offshore supply
              solutions, providing a wide range of machinery, equipment, and
              spare parts. We are committed to delivering high-quality products
              and reliable sourcing services to meet the unique demands of
              marine and offshore industries.
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
