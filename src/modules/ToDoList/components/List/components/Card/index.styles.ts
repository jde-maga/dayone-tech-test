import { css } from "@emotion/react";

export const cardStyle = css({
  border: "1px solid lightgrey",
  padding: "1rem",
  margin: "16px",
  ":hover": {
    background: "grey",
    scale: 1.2,
  },
});

export const titleStyle = css({
  fontWeight: "bold",
  textDecoration: "underline",
  fontSize: "1.1rem",
});
