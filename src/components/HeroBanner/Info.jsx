import React from "react";
import { Button, Heading } from "../index";
import { motion } from "framer-motion";
import { fadeInAnimationVariantLeft } from "../../animations/animations";

const Info = () => {
  return (
    <motion.div
      variants={fadeInAnimationVariantLeft}
      initial="initial"
      whileInView="animate"
    >
      <Heading>
        Unlock your <br /> sales potential with <br /> Salesdrive's expertise.
      </Heading>
      <p className=" font-BeVietnamPro text-DarkGrayishBlue my-8 leading-6 text-start max-md:text-center  ">
      Partner with us as we help you drive operational efficiency <br /> and sales performance by designing, implementing, managing, and <br /> optimizing your sales performance management (SPM) solutions to <br /> support your company’s overall strategy.
      </p>
      <Button className=" block m-0 max-md:m-auto">Contact Us</Button>
    </motion.div>
  );
};

export default Info;
