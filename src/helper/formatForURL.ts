export const capitalizeFirstLetter = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const formatForURL = (text: string): string => {
  return text.toLowerCase().trim().replaceAll(" ", "-").replaceAll(".", "_");
};

export const kebabToTitleCase = (str: string | undefined): string => {
  if (str) {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return " ";
};

export const slugToText = (text: string): string => {
  return text.replace(/-/g, " ").toLowerCase();
};
