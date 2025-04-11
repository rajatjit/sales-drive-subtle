import React from "react";
import { Button } from "../index";
import { motion } from "framer-motion";
import { staggerAnimationVariant } from "../../animations/animations";

const ServiceDetail = () => {
  const services = [
    {
      serialNO: "01",
      name: "Comprehensive Services",
      detail: `Our services are tailored to provide end-to-end solutions for sales improvement. We offer various software tools, data analysis, and strategies that can help you to achieve your sales goals`,
    },
    {
      serialNO: "02",
      name: "Digital Transformation Experts",
      detail:
        "We have expertise in guiding organizations through complex digital transformation processes, including the Quote-to-Commission process. We help you to adapt to the changing market conditions and buyer demands by providing appropriate technology solutions.",
    },
    {
      serialNO: "03",
      name: "Industry-Focused",
      detail:
        "We collaborate with industries to understand their needs and help them to optimize their business processes. We focus mainly on Incentive Compensation Software and have experience with various sales compensation software across multiple verticals.",
    },
  ];

  return (
    <div className=" w-1/3 max-lg:w-full mx-1  relative">
      <div>
        {services.map((item, index) => (
          <motion.div
            key={index}
            className=" flex gap-5 max-md:gap-0 ml-0  mb-8  max-md:ml-1  "
            variants={staggerAnimationVariant}
            initial="initial"
            whileInView="animate"
            custom={index}
          >
            <div className=" static max-md:absolute py-[2px] ">
              <Button shadow="none" opacity="none">
                {item.serialNO}
              </Button>
            </div>
            <div>
              <h1
                className=" font-BeVietnamPro font-semibold text-DarkBlue mb-5 py-2
               max-md:bg-VeryPaleRed max-md:pl-20 rounded-s-3xl "
              >
                {item.name}
              </h1>
              <p className="leading-6 font-BeVietnamPro text-DarkGrayishBlue  ">
                {item.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
