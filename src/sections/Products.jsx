import React from "react";
import Mytabs from "../components/Mytabs";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="prod md:py-20 py-5 md:px-10 px-3" id="Products">
          <div className="prod-texts md:py-10 py-5">
            <h1 className="text-left mt-2 md:text-7xl text-3xl font-semibold">
              Our Product Range
            </h1>
            <p className="py-5">
              We provide a wide array of high-quality equipment and spare parts
              tailored to meet the demanding needs of the marine and offshore
              industries. From advanced welding machines to specialized
              inspection products, our offerings ensure durability, safety, and
              efficiency for every operation.
            </p>
          </div>
          <div className="tabs-container md:pb-20">
            <Mytabs />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Products;
