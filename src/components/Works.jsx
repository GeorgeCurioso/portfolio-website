import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { code } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// ===============================
// ANIMATION CONSTANTS
// ===============================

const CARD_DELAY = 0.5;
const CARD_DURATION = 0.75;

// ===============================
// PROJECT CARD COMPONENT
// ===============================

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const animation = fadeIn("up", "spring", index * CARD_DELAY, CARD_DURATION);

  const handleOpenSource = () => {
    window.open(source_code_link, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div variants={animation}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full p-5 rounded-2xl sm:w-[360px] bg-tertiary"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <button
              onClick={handleOpenSource}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
              aria-label={`Open source code for ${name}`}
            >
              <img
                src={code}
                alt="source code"
                className="object-contain w-full h-full"
              />
            </button>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="mt-2 text-[14px] text-secondary">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// ===============================
// WORKS SECTION
// ===============================

const Works = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="max-w-3xl mt-3 text-[17px] leading-[30px] text-secondary"
        >
          Explore a curated selection of projects showcasing my skills
          and expertise through real-world examples. Each project is
          accompanied by a brief description and links to code repositories,
          demonstrating my ability to tackle complex challenges, work with
          diverse technologies, and effectively manage projects
        </motion.p>
      </div>

      <div className="flex flex-wrap gap-7 mt-20">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "");