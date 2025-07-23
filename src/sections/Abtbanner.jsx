import React from 'react'
import Mycarousal from '../components/Mycarousal'

const Abtbanner = () => {
    return (
        <>
            <div className="abt-top bg-black py-20 px-10">
                <div className="abt-bg text-center md:text-5xl text-2xl text-white">
                    <h1>Go anywhere. Take everyone. The seven-seat SUV that’s as adventurous as you.
                    </h1>
                </div>
                <Mycarousal />
            </div>
        </>
    )
}

export default Abtbanner