import React from 'react'
import { GoArrowRight } from "react-icons/go";
import '../components/Footer.css'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className=' bg-black py-20 text-white px-10'>
                <div className="footer-start flex justify-between">
                    <div className="w-1/2">
                        <div className="addr py-5">
                            <h6 className='text-white/60 text-[14px] py-2'>[Address]</h6>
                            <p>Louisville, KY</p>
                        </div>
                        <div className="email py-5">
                            <h6 className='text-white/60 text-[14px] py-2'>[Email]</h6>
                            <p>Louisville, KY</p>
                        </div>
                        <div className="phone py-5">
                            <h6 className='text-white/60 text-[14px] py-2'>[Phone]</h6>
                            <p>Louisville, KY</p>
                        </div>
                        <div className="social py-5">
                            <h6 className='text-white/60 text-[14px] py-2'>[Social]</h6>
                            <ul>
                                <li className='flex justify-start items-center gap-2'><GoArrowRight /> Facebook</li>
                                <li className='flex justify-start items-center gap-2'><GoArrowRight /> Instagram</li>
                                <li className='flex justify-start items-center gap-2'><GoArrowRight /> LinkedIn</li>
                                <li className='flex justify-start items-center gap-2'><GoArrowRight /> Youtube</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h3 className='text-5xl'>Ready to Start </h3>
                        <h3 className='text-5xl py-3'>Your Project?</h3>
                        <form action="" method="get" className='footer-form py-5 flex flex-col gap-3'>
                            <label htmlFor="name"></label>
                            <input type="text" name="name" id="" placeholder='Your Name' />
                            <label htmlFor="email"></label>
                            <input type="email" name="email" id="" placeholder='Email Address' />
                            <label htmlFor="comment"></label>
                            <textarea name="" id="" cols="10" rows="1" placeholder='Comments' className='text-area'></textarea>
                            <button type="submit" placeholder="Submit" className='bg-white/80 px-10 py-2 w-fit text-black cursor-pointer mt-5'>Submit</button>
                        </form>
                    </div>
                </div>


                {/* copyright */}
                <div className="copy-right pt-15">
                    <p className='text-[14px] text-gray-600'>© {year} - Alrights reserved by Prism Adverto</p>
                </div>
            </footer>
        </>
    )
}

export default Footer