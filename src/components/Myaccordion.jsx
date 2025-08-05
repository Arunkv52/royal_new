import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import "../components/Myaccordion.css";
import Port from "../assets/marine-acc.jpg";

const Myaccordion = () => {
  return (
    <div className="accordion md:py-10 py-10 md:px-10 px-3" id="Services">
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
              <AccordionTrigger
                className={"text-2xl hover:no-underline cursor-pointer"}
              >
                Built for Tough Environments
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance px-3 text-[18px]">
                <p>
                  Our products are engineered to withstand harsh marine
                  conditions and demanding industrial applications. With robust
                  durability and long-lasting performance, they empower your
                  teams to work efficiently—even in the most challenging
                  environments.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger
                className={"text-2xl hover:no-underline cursor-pointer"}
              >
                Precision and Safety Guaranteed
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance  px-3 text-[18px]">
                <p>
                  Every tool and accessory we supply undergoes stringent quality
                  checks to ensure accuracy, safety, and reliability. This
                  commitment allows you to perform with confidence, knowing your
                  equipment is fully compliant with industry standards.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger
                className={"text-2xl hover:no-underline cursor-pointer"}
              >
                Your Trusted Partner in Supply
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance  px-3 text-[18px]">
                <p>
                  More than just a supplier, Royal Synergy is your strategic
                  partner in marine and offshore solutions. With fast sourcing,
                  competitive pricing, and global reach, we make sure your
                  operations stay ahead without compromising on quality.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Myaccordion;
