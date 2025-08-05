import React from 'react'
import Mycarousal from '../components/Mycarousal'

const Abtbanner = () => {
    return (
        <>
            <div className="abt-top bg-black py-20 px-10">
                <div className="abt-bg text-center md:text-5xl text-2xl text-white">
                    <h1>Comprehensive Solutions for Marine & Offshore Needs
                    </h1>
                </div>
                <Mycarousal />
            </div>
        </>
    )
}

export default Abtbanner