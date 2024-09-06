import { css } from "@emotion/react";

export const styles = css({
  margin: 0,
  padding: 64,
  display: "flex",
  minWidth: "320px",
  minHeight: "100vh",
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  lineHeight: 1.5,
  fontWeight: 400,
  colorScheme: "light dark",
  color: "rgba(255, 255, 255, 0.87)",
  backgroundColor: "#242424",
  fontSynthesis: "none",
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  "@media (prefers-color-scheme: light)": {
    color: "#213547",
    backgroundColor: "#ffffff",
  },
  button: css({
    borderRadius: "8px",
    border: "1px solid transparent",
    padding: "0.6em 1.2em",
    fontSize: "1em",
    fontWeight: 500,
    fontFamily: "inherit",
    backgroundColor: "#1a1a1a",
    cursor: "pointer",
    transition: "border-color 0.25s",
    "&:hover": {
      borderColor: "#646cff",
    },
    "&:focus, &:focus-visible": {
      outline: "4px auto -webkit-focus-ring-color",
    },
    "@media (prefers-color-scheme: light)": {
      backgroundColor: "#f9f9f9",
    },
  }),
});
