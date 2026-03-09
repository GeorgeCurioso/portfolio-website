import React from "react";

import { BallCanvas } from "./3d-renders";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// ===============================
// TECHNOLOGY ITEM
// ===============================

const TechItem = ({ icon, name }) => {
  return (
    <div className="w-28 h-28">
      <BallCanvas icon={icon} aria-label={name} />
    </div>
  );
};

// ===============================
// TECH SECTION
// ===============================

const Tech = () => {
  return (
    <section className="flex flex-wrap justify-center gap-10">
      {technologies.map(({ name, icon }) => (
        <TechItem
          key={name}
          name={name}
          icon={icon}
        />
      ))}
    </section>
  );
};

export default SectionWrapper(Tech, "");