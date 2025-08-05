import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import MarineSupply from '../assets/marine-supply.jpg'
import MarineOff from '../assets/offsource.webp'
import SourcingServices from '../assets/sourcing-service.jpg'
import SpareParts from '../assets/supply-items.jpg'
import '../components/Mycarousal.css'


const Mycarousal = () => {
  return (
    <div className="carousal-container md:px-20 py-10 px-3">
      <Carousel>
        <CarouselContent>
          <CarouselItem className={"md:basis-1/3 md:p-10"}>
            <img src={MarineSupply} alt="" className="rounded-2xl pb-10 marine-scroll-img" />
            <p className="text-white md:text-2xl text-[20px]">Marine Supply</p>
            <h6 className="text-gray-300 pt-5">
              Comprehensive solutions for marine operations.{" "}
            </h6>
          </CarouselItem>
          <CarouselItem className={"md:basis-1/3 md:p-10"}>
            <img src={MarineOff} alt="" className="rounded-2xl pb-10 marine-scroll-img" />
            <p className="text-white md:text-2xl  text-[20px]">
              Offshore Supply
            </p>
            <h6 className="text-gray-300 pt-5">
              Equipment and spare parts for offshore industries.{" "}
            </h6>
          </CarouselItem>
          <CarouselItem className={"md:basis-1/3 md:p-10"}>
            <img src={SourcingServices} alt="" className="rounded-2xl pb-10 marine-scroll-img" />
            <p className="text-white md:text-2xl  text-[20px]">
              Sourcing Services
            </p>
            <h6 className="text-gray-300 pt-5">
             Efficient sourcing of specialized components and tools.
            </h6>
          </CarouselItem>
          <CarouselItem className={"md:basis-1/3 md:p-10"}>
            <img src={SpareParts} alt="" className="rounded-2xl pb-10 marine-scroll-img" />
            <p className="text-white md:text-2xl  text-[20px]">
             Spare Parts & Equipment
            </p>
            <h6 className="text-gray-300 pt-5">
             Reliable supply chain for all required spares and machines.
            </h6>
          </CarouselItem>
          
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Mycarousal;
