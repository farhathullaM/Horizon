function capitalizeFirstLetter(string) {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default capitalizeFirstLetter;

export const capitalizeText = (text) => {
  if (!text) return text;
  return text.toUpperCase();
};
