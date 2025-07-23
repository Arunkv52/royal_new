import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel"
import DigitalIndustry from '../assets/digital-industry.png'

const Mycarousal = () => {
    return (
        <div className="carousal-container md:px-20 py-10 px-3">
            <Carousel>
                <CarouselContent>
                    <CarouselItem className={'md:basis-1/3 md:p-10'}>
                        <img src={DigitalIndustry} alt="" className='rounded-2xl pb-10' />
                        <p className='text-white md:text-2xl text-[20px]'>Diesel mild hybrid</p>
                        <h6 className='text-gray-300 pt-5'>Efficient and powerful, our mild hybrid engines harvest, store and redeploy energy normally lost during deceleration.                        </h6>
                    </CarouselItem>
                    <CarouselItem className={'md:basis-1/3 md:p-10'}>
                        <img src={DigitalIndustry} alt="" className='rounded-2xl pb-10' />
                        <p className='text-white md:text-2xl  text-[20px]'>Diesel mild hybrid</p>
                        <h6 className='text-gray-300 pt-5'>Efficient and powerful, our mild hybrid engines harvest, store and redeploy energy normally lost during deceleration.                        </h6>
                    </CarouselItem>
                    <CarouselItem className={'md:basis-1/3 md:p-10'}>
                        <img src={DigitalIndustry} alt="" className='rounded-2xl pb-10' />
                        <p className='text-white md:text-2xl  text-[20px]'>Diesel mild hybrid</p>
                        <h6 className='text-gray-300 pt-5'>Efficient and powerful, our mild hybrid engines harvest, store and redeploy energy normally lost during deceleration.                        </h6>
                    </CarouselItem>
                    <CarouselItem className={'md:basis-1/3 md:p-10'}>
                        <img src={DigitalIndustry} alt="" className='rounded-2xl pb-10' />
                        <p className='text-white md:text-2xl  text-[20px]'>Diesel mild hybrid</p>
                        <h6 className='text-gray-300 pt-5'>Efficient and powerful, our mild hybrid engines harvest, store and redeploy energy normally lost during deceleration.                        </h6>
                    </CarouselItem>
                    <CarouselItem className={'md:basis-1/3 md:p-10'}>
                        <img src={DigitalIndustry} alt="" className='rounded-2xl pb-10' />
                        <p className='text-white md:text-2xl  text-[20px]'>Diesel mild hybrid</p>
                        <h6 className='text-gray-300 pt-5'>Efficient and powerful, our mild hybrid engines harvest, store and redeploy energy normally lost during deceleration.                        </h6>
                    </CarouselItem>
                    <CarouselItem className={'md:basis-1/3 md:p-10'}>
                        <img src={DigitalIndustry} alt="" className='rounded-2xl pb-10' />
                        <p className='text-white md:text-2xl  text-[20px]'>Diesel mild hybrid</p>
                        <h6 className='text-gray-300 pt-5'>Efficient and powerful, our mild hybrid engines harvest, store and redeploy energy normally lost during deceleration.                        </h6>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

    )
}

export default Mycarousal