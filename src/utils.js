import padStart from "lodash.padstart";

export const format = count => {
  const minutes = Math.floor(count / 60);
  const seconds = Math.round((count / 60 - minutes) * 60);

  return `${padStart(minutes, 2, "0")}:${padStart(seconds, 2, "0")}`;
};
