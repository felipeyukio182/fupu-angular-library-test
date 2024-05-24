const removeDuplicateObjectsFromArray = <T = any>(arr: T[], key: string): T[] => {
  return [...new Map(arr.map((item) => [(item as any)[key], item])).values()];
};

export { removeDuplicateObjectsFromArray };
