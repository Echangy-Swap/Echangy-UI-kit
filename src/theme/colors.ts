import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "red",
  primaryBright: "linear-gradient(235deg,#336ff5 4.05%,rgba(17,81,225,.32) 103.52%)",
  primaryDark: "linear-gradient(235deg,#336ff5 4.05%,rgba(17,81,225,.32) 103.52%)",
  secondary: "red",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  nav:"linear-gradient(180deg,#071c3c,#002b6f)",
  sidebar:"rgba(0, 41, 102, 1)",
  background: "rgb(7, 22, 45)",
  backgroundDisabled: "#E9EAEB",
  contrast: "rgba(0, 41, 102, 1)",
  invertedContrast: "rgba(0, 41, 102, 1)",
  input: "#26466D",
  tertiary: "#26466D",
  text: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#FFFFFF",
  borderColor: "#E9EAEB",
  card: "linear-gradient(235deg, rgb(51, 111, 245) 4.05%, rgba(17, 81, 225, 0.32) 103.52%)",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};



export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  nav:"rgb(7, 22, 45)",
  sidebar:"#27262c",
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
