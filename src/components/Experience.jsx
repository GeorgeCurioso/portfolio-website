import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// ===============================
// STYLE CONSTANTS
// ===============================

const TIMELINE_CONTENT_STYLE = {
  background: "#1d1836",
  color: "#fff",
};

const TIMELINE_ARROW_STYLE = {
  borderRight: "7px solid #232631",
};

// ===============================
// EXPERIENCE CARD
// ===============================

const ExperienceCard = ({ experience }) => {
  const { title, company_name, icon, iconBg, date, points } = experience;

  return (
    <VerticalTimelineElement
      contentStyle={TIMELINE_CONTENT_STYLE}
      contentArrowStyle={TIMELINE_ARROW_STYLE}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={icon}
            alt={company_name}
            className="object-contain w-[60%] h-[60%]"
          />
        </div>
      }
    >
      <header>
        <h3 className="text-[24px] font-bold text-[#6aa84f]">{title}</h3>
        <p
          className="text-[16px] font-semibold text-secondary"
          style={{ margin: 0 }}
        >
          {company_name}
        </p>
      </header>

      <ul className="mt-5 ml-5 space-y-2 list-disc">
        {points.map((point, index) => (
          <li
            key={`${company_name}-point-${index}`}
            className="pl-1 text-[14px] tracking-wider text-white-100"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// ===============================
// EXPERIENCE SECTION
// ===============================

const Experience = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>

        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="flex flex-col mt-20">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.company_name}-${experience.date}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");