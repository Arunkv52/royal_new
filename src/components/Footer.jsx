import React from 'react'
import { GoArrowRight } from "react-icons/go";
import '../components/Footer.css'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className=' bg-black py-20 text-white md:px-10 px-3' id='Footer'>
                <div className="footer-start md:flex md:justify-between">
                    <div className="md:w-1/2 w-full">
                        <div className="addr">
                            <h6 className='text-white/60 text-[14px] py-2'>[Address]</h6>
                            <p>Jurong West Street 74, 756 #02-70, <br /> Singapore 640756</p>
                        </div>
                        <div className="email py-5">
                            <h6 className='text-white/60 text-[14px] py-2'>[Email]</h6>
                            <p>sales@royalsynergy.sg</p>
                        </div>
                        <div className="phone py-5">
                            <h6 className='text-white/60 text-[14px] py-2'>[Phone]</h6>
                            <p>+65 97271435, 8377 1041</p>
                        </div>
                        <div className="social py-5">
                            <h6 className='text-white/60 text-[14px] py-2'>[Social]</h6>
                            <ul>
                                <a href="#"><li className='flex justify-start items-center gap-2 hover:text-red-300'><GoArrowRight /> Facebook</li></a>
                                <a href="#"><li className='flex justify-start items-center gap-2 hover:text-red-300'><GoArrowRight /> Instagram</li></a>
                                <a href="#"><li className='flex justify-start items-center gap-2 hover:text-red-300'><GoArrowRight /> LinkedIn</li></a>
                                <a href="#"><li className='flex justify-start items-center gap-2 hover:text-red-300'><GoArrowRight /> Youtube</li></a>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full md:py-0 py-10">
                        <h3 className='md:text-5xl text-5xl'>Ready to Start </h3>
                        <h3 className='md:text-5xl text-5xl py-3'>Your Project?</h3>
                        <form action="" method="get" className='footer-form py-5 flex flex-col gap-3 md:w-1/2 w-full'>
                            <label htmlFor="name"></label>
                            <input type="text" name="name" id="" placeholder='Your Name' />
                            <label htmlFor="email"></label>
                            <input type="email" name="email" id="" placeholder='Email Address' />
                            <label htmlFor="tel"></label>
                            <input type="tel" name="tel" id="" placeholder='Phone number' />
                            <label htmlFor="comment"></label>
                            <textarea name="" id="" cols="10" rows="1" placeholder='Comments' className='text-area'></textarea>
                            <button type="submit" placeholder="Submit" className='bg-white hover:bg-red-700 hover:text-white px-10 md:py-1 py-3  text-black cursor-pointer mt-5'>Submit</button>
                        </form>
                    </div>
                </div>


                {/* copyright */}
                <div className="copy-right pt-15">
                    <p className='text-[14px] text-gray-600'>© {year} Alrights reserved by Royal Synergy  - Developed by <a href="www.prismadverto.com" className='text-red-300'>Prism Adverto</a></p>
                </div>
            </footer>
        </>
    )
}

export default Footer