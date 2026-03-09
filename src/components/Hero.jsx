import { motion } from "framer-motion";

import { styles } from "../styles";
import { SketchfabModel } from "./canvas";

// ===============================
// CONSTANTS
// ===============================

const ACCENT_COLOR = "#6aa84f";
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
          <div
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: ACCENT_COLOR }}
          />
          <div className="w-1 h-40 sm:h-80 green-gradient" />
        </div>

        {/* TEXT CONTENT */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span style={{ color: ACCENT_COLOR }}>Jorge Yanas</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I specialize in{" "}
            <u style={{ color: ACCENT_COLOR }}>Machine Learning</u>,
            <br className="hidden sm:block" />
            and <u style={{ color: ACCENT_COLOR }}>Data Analytics</u> in the financial sector
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
              className="w-3 h-3 mb-1 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;