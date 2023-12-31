// Utility function to get a random colours from the provided list
export const getRandomColour: any = () => {
  const colours = [
    "primary",
    "secondary",
    "success",
    "error",
    "warning",
    "grey",
    "inherit",
    "info",
  ];

  // Select a random colour from the list
  const randomColour = colours[Math.floor(Math.random() * colours.length)];

  return randomColour;
};
