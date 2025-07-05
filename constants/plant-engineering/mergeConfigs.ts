// Merge configuration for different engineering disciplines
// Format: { [sectionId]: { indices to merge } }

export const mergeConfigs = {
    process: {},
    safety: {},
  
    pipingEng: {
      merge1: [0, 1]
    },
  
    pipingStress: {
      merge1: [0, 1]
    },
  
    mechanical: {
      merge1: [0, 1]
    },
  
    electrical: {
      merge1: [1, 2, 3]
    },
  
    reverseEng: {},
  
    instrumentation: {
      merge1: [1, 2, 3]
    },
  
    civil: {},
  
    structural: {},
  
    modular: {
      merge1: [0, 1]
    },
  
    procurement: {}
  };
  