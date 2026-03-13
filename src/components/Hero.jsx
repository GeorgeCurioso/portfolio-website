import { motion } from "framer-motion";

import { styles } from "../styles";
import { SketchfabModel } from "./3d-renders";

// ===============================
// CONSTANTS
// ===============================

const SCROLL_ANIMATION = {
  animate: { y: [0, 24, 0] },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: "loop",
  },
};

// ===============================
// HERO COMPONENT
// ===============================

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">

      {/* HERO CONTENT */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 ${styles.paddingX}`}
      >

        {/* LEFT INDICATOR */}
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-accent" />
          <div className="w-1 h-40 sm:h-80 bg-accent opacity-70" />
        </div>

        {/* TEXT CONTENT */}
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-accent">Jorge Yanas</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2`}>
            <span className="text-accent font-semibold">Machine Learning</span> and{" "}
            <br className="hidden sm:block" />
            <span className="text-accent font-semibold">
              Data Science
            </span>{" "}
            for finance
          </p>
        </div>
      </div>

      {/* 3D MODEL */}
      <SketchfabModel />

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-32 xs:bottom-10 flex items-center justify-center w-full">
        <a href="#about" aria-label="Scroll to about section">
          <div className="flex items-start justify-center p-2 border-4 rounded-3xl border-secondary w-[35px] h-[64px]">
            <motion.div
              {...SCROLL_ANIMATION}
              className="w-3 h-3 mb-1 rounded-full bg-accent"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;