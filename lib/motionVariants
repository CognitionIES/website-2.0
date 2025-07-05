export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export const fadeInVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const slideUpVariants = {
  initial: { y: 30, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const staggerContainer = (staggerChildren: number, delayChildren: number = 0) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

export const scaleOnHover = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const waveVariants = {
  initial: { 
    pathLength: 0,
    pathOffset: 1
  },
  animate: { 
    pathLength: 1,
    pathOffset: 0,
    transition: { 
      duration: 1.5,
      ease: "easeInOut" 
    }
  }
};

export const staggerParentVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const letterFadeVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};

export const subtleFloatVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

export const backgroundGradientVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 1.5
    }
  }
};
