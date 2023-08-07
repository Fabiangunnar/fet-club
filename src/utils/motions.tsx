export const zoomIn = (delay: any, duration: any) => ({
  hidden: {
    scale: 1,
    // opacity: 0,
  },
  show: {
    scale: 1,
    // opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
