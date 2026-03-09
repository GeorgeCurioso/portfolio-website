// ===============================
// CORE COMPONENTS
// ===============================

import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Tech from "./Tech";
import Experience from "./Experience";
import Works from "./Works";
import Feedbacks from "./Feedbacks";
import Contact from "./Contact";
import CanvasLoader from "./Loader";

// ===============================
// 3D / CANVAS COMPONENTS
// ===============================

import {
  TrooperCanvas,
  SketchfabModel,
  BallCanvas,
  StarsCanvas,
} from "./canvas";

// ===============================
// EXPORTS
// ===============================

export {
  // layout
  Navbar,
  Hero,

  // sections
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,

  // utilities
  CanvasLoader,

  // canvas
  TrooperCanvas,
  SketchfabModel,
  BallCanvas,
  StarsCanvas,
};