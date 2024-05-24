const removeDuplicateValuesFromArray = <T = any>(arr: T[]): T[] => {
  return Array.from(new Set(arr));
};

export {removeDuplicateValuesFromArray};
