export const slugify = (text: string | number) => {
  if (text) {
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-") // Remplace les espaces par des tirets
      .replace(" ", "-") // Remplace les espaces par des tirets
      .replace(/[^\w\-]+/g, "") // Enlève tous les caractères non alphanumériques
      .replace(/\-\-+/g, "-"); // Remplace les multiples tirets par un seul
    return text;
  }
};
