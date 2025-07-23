import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import '../components/Mytabs.css'
import ProdImg from '../assets/home-banner.webp'

const MyTabs = () => {
    return (
        <Tabs defaultValue="account">
            <TabsList>
                <TabsTrigger value="account">Production</TabsTrigger>
                <TabsTrigger value="password">Operation</TabsTrigger>
                <TabsTrigger value="maintanence">Maintanence</TabsTrigger>
            </TabsList>

            <TabsContent value="account">
                <div className="acc-full md:flex">
                    <div className="tab-below md:w-1/2 w-full">
                        <h4 className='md:text-5xl text-3xl font-semibold py-4'>Strategic
                            big-picture
                            visibility.</h4>
                        <p className='md:text-[18px] text-[16px]'>Command the full view - real-time data reveals every gap and wins. Management steers smarter decisions, ramps up efficiency, and fuels growth.
                        </p>
                        <p className='md:text-[18px] text-[16px] py-3'>America’s defense industrial base, which has helped to deter war and maintain peace for decades is being left behind. The arsenal we need is an order of magnitude more than we can build at present. We need a different approach to generating military power. The good news is this is now possible. See how Anduril is disrupting defense production, and how you can get involved.</p>
                    </div>
                    <div className="tab-below md:w-1/2 w-full md:px-20 px-0 md:py-0 py-5">
                        <img src={ProdImg} alt="" />
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="password">
                <div className="acc-full md:flex">
                    <div className="tab-below md:w-1/2 w-full">
                        <h4 className='md:text-5xl text-3xl font-semibold py-4'>Operation
                            big-picture
                            visibility.</h4>
                        <p className='md:text-[18px] text-[16px]'>Command the full view - real-time data reveals every gap and wins. Management steers smarter decisions, ramps up efficiency, and fuels growth.
                        </p>
                        <p className='md:text-[18px] text-[16px] py-3'>America’s defense industrial base, which has helped to deter war and maintain peace for decades is being left behind. The arsenal we need is an order of magnitude more than we can build at present. We need a different approach to generating military power. The good news is this is now possible. See how Anduril is disrupting defense production, and how you can get involved.</p>
                    </div>
                    <div className="tab-below md:w-1/2 w-full md:px-20 px-0 md:py-0 py-5">
                        <img src={ProdImg} alt="" />
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="maintanence">
                <div className="acc-full md:flex">
                    <div className="tab-below md:w-1/2 w-full">
                        <h4 className='md:text-5xl text-3xl font-semibold py-4'>Maintanence
                            big-picture
                            visibility.</h4>
                        <p className='md:text-[18px] text-[16px]'>Command the full view - real-time data reveals every gap and wins. Management steers smarter decisions, ramps up efficiency, and fuels growth.
                        </p>
                        <p className='md:text-[18px] text-[16px] py-3'>America’s defense industrial base, which has helped to deter war and maintain peace for decades is being left behind. The arsenal we need is an order of magnitude more than we can build at present. We need a different approach to generating military power. The good news is this is now possible. See how Anduril is disrupting defense production, and how you can get involved.</p>
                    </div>
                    <div className="tab-below md:w-1/2 w-full md:px-20 px-0 md:py-0 py-5">
                        <img src={ProdImg} alt="" />
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    )
}

export default MyTabs
