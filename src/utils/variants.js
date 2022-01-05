export const helloVariants = {
  initial: { x: "-100vw", opacity: 0 },
  start: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 25,
      duration: 0.5,
    },
  },
  disappear: {
    opacity: 0,
    transition: { duration: 0, delay: 0.5 },
  },
};
export const myNameVariants = {
  initial: {
    opacity: 0,
  },
  appear: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.25 },
  },
};
export const jonathanVariants = {
  initial: {
    opacity: 0,
  },
  appear: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
export const webVariants = {
  initial: {
    opacity: 0,
  },
  appear: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeIn", delay: 0.2 },
  },
};
export const buttonVariants = {
  initial: {
    opacity: 0,
    scale: 1,
  },
  appear: {
    scale: [1, 0.3, 0.7, 1.3, 1],
    opacity: 1,
    transition: { duration: 0.6, ease: "easeIn", delay: 0 },
  },
  tap: {
    scale: 0.95,
    x: 1,
    y: 1,
    transition: { duration: 0.1, ease: "easeInOut" },
  },
};
