export const firstLetterUppercase = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const formatForURL = (text: string): string => {
  return text.toLowerCase().trim().replaceAll(" ", "-");
};

export const slugToText = (text: string): string => {
  return text.replace(/-/g, " ").toLowerCase();
};
