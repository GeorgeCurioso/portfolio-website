import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// ===============================
// ANIMATION CONSTANTS
// ===============================

const CARD_ANIMATION_DELAY = 0.5;
const CARD_ANIMATION_DURATION = 0.75;

// ===============================
// SERVICE CARD COMPONENT
// ===============================

const ServiceCard = ({ index, title, icon }) => {
  const animation = fadeIn("right", "spring", index * CARD_ANIMATION_DELAY, CARD_ANIMATION_DURATION);

  return (
    <Tilt className="w-full xs:w-[250px]">
      <motion.div
        variants={animation}
        className="w-full rounded-[20px] p-[1px] shadow-card green-pink-gradient"
      >
        <div
          className="flex flex-col items-center justify-evenly min-h-[280px] py-5 px-12 rounded-[20px] bg-tertiary"
        >
          <img
            src={icon}
            alt={title}
            className="object-contain w-16 h-16"
          />

          <h3 className="text-[20px] font-bold text-center text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// ===============================
// ABOUT SECTION
// ===============================

const About = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="max-w-3xl mt-4 text-[17px] leading-[30px] text-secondary"
      >
        I'm a passionate Data Scientist and AI Engineer specializing in Machine Learning,
        Data Analytics, and Finance. My expertise lies in developing predictive models,
        neural networks, and advanced AI algorithms to optimize operations and strategic
        decisions in the financial sector. Let's collaborate together.
      </motion.p>

      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");