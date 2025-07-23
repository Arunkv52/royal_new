import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"
import '../components/Myaccordion.css'
import Port from '../assets/Port_01.jpeg'


const Myaccordion = () => {
    return (
        <div className="accordion md:py-10 py-10 md:px-10 px-3">
            <div className="acc-flex md:flex md:py-20 py-10">
                <div className="md:w-1/2 w-full">
                    <img src={Port} alt="" />
                </div>
                <div className="md:w-1/2 w-full md:py-0 md:p-10 p-0">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className={'md:text-[30px] hover:no-underline cursor-pointer'}>Product Information</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance px-3 text-[18px]">
                                <p>
                                    Our flagship product combines cutting-edge technology with sleek
                                    design. Built with premium materials, it offers unparalleled
                                    performance and reliability.
                                </p>
                                <p>
                                    Key features include advanced processing capabilities, and an
                                    intuitive user interface designed for both beginners and experts.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className={'text-2xl hover:no-underline cursor-pointer'}>Shipping Details</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance  px-3 text-[18px]">
                                <p>
                                    We offer worldwide shipping through trusted courier partners.
                                    Standard delivery takes 3-5 business days, while express shipping
                                    ensures delivery within 1-2 business days.
                                </p>
                                <p>
                                    All orders are carefully packaged and fully insured. Track your
                                    shipment in real-time through our dedicated tracking portal.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className={'text-2xl hover:no-underline cursor-pointer'}>Return Policy</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance  px-3 text-[18px]">
                                <p>
                                    We stand behind our products with a comprehensive 30-day return
                                    policy. If you&apos;re not completely satisfied, simply return the
                                    item in its original condition.
                                </p>
                                <p>
                                    Our hassle-free return process includes free return shipping and
                                    full refunds processed within 48 hours of receiving the returned
                                    item.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>



        </div>

    )
}

export default Myaccordion


