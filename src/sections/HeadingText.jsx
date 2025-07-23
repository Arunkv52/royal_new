import React from 'react';
import LightRays from '../components/Lightrays'; // Adjust path as needed

const HeroSection = () => {
    return (
        <div className="">
            <div className=" h-screen w-full">
                <LightRays/>

                <div className="relative top-[-50%] z-10 flex flex-col items-center justify-center text-white text-center lighray-text">
                    <h1 className="text-[18px] font-medium">Welcome</h1>
                    <p className="mt-2 md:text-7xl text-4xl">We’re here to bring</p>
                    <p className='text-red-600 md:text-7xl text-4xl'>your vision to life.</p>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;
