// src/utils/motion.js

// Transición base reutilizable
const defaultTransition = {
  type: "tween",
  ease: "easeOut",
};

// Direcciones reutilizables
const directions = {
  left: { x: 100, y: 0 },
  right: { x: -100, y: 0 },
  up: { x: 0, y: 100 },
  down: { x: 0, y: -100 },
};

// Animación para títulos o texto principal
export const textVariant = (delay = 0) => ({
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

// Animación fade con movimiento
export const fadeIn = (
  direction = "up",
  type = "tween",
  delay = 0,
  duration = 0.5
) => {
  const move = directions[direction] || { x: 0, y: 0 };

  return {
    hidden: {
      ...move,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        ...defaultTransition,
        type,
        delay,
        duration,
      },
    },
  };
};

// Animación de zoom
export const zoomIn = (delay = 0, duration = 0.5) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ...defaultTransition,
      delay,
      duration,
    },
  },
});

// Animación de deslizamiento
export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Animación para contenedores con hijos escalonados
export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0
) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});