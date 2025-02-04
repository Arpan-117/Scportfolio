export const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
};

export const item = {
  hidden: {y:'100%'},
  show: {y:"0%", transition:{duration: 0.5}}
};
export const item1 = {
  hidden: {x:'100%'},
  show: {x:"0%", transition:{duration: 0.5}},
  exit: { 
    opacity: 0, 
    x: '-100%',
    transition: { duration: 0.5 } 
  }
};

