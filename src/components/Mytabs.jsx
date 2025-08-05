import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import "../components/Mytabs.css";
import ProdImg from "../assets/Welding-img.jpeg";
import IndustryTool from "../assets/industry-tool.jpg";
import MarineOffshore from "../assets/Marine-Offshore.jpg";

const MyTabs = () => {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">
          Welding Machines and Equipment
        </TabsTrigger>
        <TabsTrigger value="password">
          Marine & Offshore Spare Parts
        </TabsTrigger>
        <TabsTrigger value="maintanence">
          Industrial Tools & Accessories
        </TabsTrigger>
      </TabsList>

      <TabsContent value="account">
        <div className="acc-full md:flex">
          <div className="tab-below md:w-1/2 w-full">
            <p className="md:text-[18px] text-[16px] py-10">
              High-performance welding machines designed for marine and offshore
              environments. Ensures precision, durability, and efficiency in
              challenging conditions. Suitable for heavy-duty industrial and
              shipyard applications.
            </p>
          </div>
          <div className="tab-below md:w-1/2 w-full md:px-20 px-0 md:py-0 py-5">
            <img src={ProdImg} alt="" />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="acc-full md:flex">
          <div className="tab-below md:w-1/2 w-full">
            <p className="md:text-[18px] text-[16px] py-10">
              Comprehensive range of spare parts for ships and offshore
              platforms. Sourced from trusted global brands for reliable
              performance. Ensures uninterrupted operations and reduced
              downtime.
            </p>
          </div>
          <div className="tab-below md:w-1/2 w-full md:px-20 px-0 md:py-0 py-5">
            <img src={MarineOffshore} alt="" />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="maintanence">
        <div className="acc-full md:flex">
          <div className="tab-below md:w-1/2 w-full">
            <p className="md:text-[18px] text-[16px] py-10">
              Wide selection of tools and accessories for industrial maintenance
              and repairs. Built to withstand rigorous use in demanding
              environments. Ideal for marine, offshore, and heavy engineering
              sectors.
            </p>
          </div>
          <div className="tab-below md:w-1/2 w-full md:px-20 px-0 md:py-0 py-5">
            <img src={IndustryTool} alt="" />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default MyTabs;
