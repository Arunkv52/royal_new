import React from 'react';
import LightRays from '../components/Lightrays'; // Adjust path as needed

const HeroSection = () => {
    return (
        <div className="">
            <div className=" h-screen w-full">
                <LightRays/>

                <div className="relative top-[-50%] z-10 flex flex-col items-center justify-center text-white text-center lighray-text">
                    <p className="mt-2 md:text-7xl text-4xl">Creating The Best</p>
                    <p className='text-[#e15425] md:text-7xl text-4xl'>Welding Experience.</p>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;
