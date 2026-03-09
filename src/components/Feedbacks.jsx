import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

// ===============================
// ANIMATION CONSTANTS
// ===============================

const CARD_ANIMATION_DELAY = 0.5;
const CARD_ANIMATION_DURATION = 0.75;

// ===============================
// FEEDBACK CARD
// ===============================

const FeedbackCard = ({
  index,
  certification,
  company,
  month,
  year,
  image,
}) => {
  const animation = fadeIn(
    "",
    "spring",
    index * CARD_ANIMATION_DELAY,
    CARD_ANIMATION_DURATION
  );

  return (
    <motion.div
      variants={animation}
      className="w-full p-10 rounded-3xl xs:w-[320px] bg-black-200 shadow-card"
    >
      <div className="mt-1">
        <p className="text-[18px] tracking-wider text-white-100">
          {certification}
        </p>

        <div className="flex items-center justify-between gap-1 mt-7">
          <div className="flex flex-col flex-1">
            <p className="text-[16px] font-medium text-accent">
              {company}
            </p>

            <p className="mt-1 text-[12px] text-secondary">
              {month} {year}
            </p>
          </div>

          <img
            src={image}
            alt={company}
            className="object-cover w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

// ===============================
// FEEDBACK SECTION
// ===============================

const Feedbacks = () => {
  return (
    <section className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-primary rounded-2xl min-h-[300px] ${styles.padding}`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My learning path</p>
          <h2 className={styles.sectionHeadText}>Certifications</h2>
        </motion.div>
      </div>

      <div
        className={`flex flex-wrap gap-7 -mt-20 pb-14 ${styles.paddingX}`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={`${testimonial.company}-${testimonial.year}`}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Feedbacks, "");