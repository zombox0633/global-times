export const formatForURL = (text: string): string => {
  return text.toLowerCase().trim().replaceAll(" ", "-");
};

export const slugToText = (text: string): string => {
  return text.replace(/-/g, " ").toLowerCase();
};
