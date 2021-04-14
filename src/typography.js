import React from "react";
import { Typography } from "@material-ui/core";
import { colors } from "./globalStyles";

export const fontFamily = "'Josefin Sans', sans-serif";

const styles = {
  mainHeading: {
    fontSize: 30,
    fontFamily: fontFamily,
  },
  subHeading: {
    fontSize: 24,
    fontFamily: fontFamily,
  },
  mainBodyText: {
    fontSize: 18,
    fontFamily: fontFamily,
  },
  bodyText: {
    fontSize: 14,
    fontFamily: fontFamily,
  },
  smallText: {
    fontSize: 12,
    fontFamily: fontFamily,
  },
  tinyText: {
    fontSize: 10,
    fontFamily: fontFamily,
  },
};

export function MainHeading({ children, color = colors.mainText }) {
  return (
    <Typography style={{ ...styles.mainHeading, color: color }}>
      {children}
    </Typography>
  );
}

export function SubHeading({ children }) {
  return <Typography style={styles.subHeading}>{children}</Typography>;
}

export function MainBodyText({ children, bold }) {
  return (
    <Typography
      style={{ ...styles.mainBodyText, fontWeight: bold ? 700 : 400 }}
    >
      {children}
    </Typography>
  );
}

export function BodyText({ children, bold, color }) {
  return (
    <Typography
      style={{ ...styles.bodyText, fontWeight: bold ? 700 : 400, color }}
    >
      {children}
    </Typography>
  );
}

export function SmallText({ children, tiny, bold, color }) {
  let type = tiny ? styles.tinyText : styles.smallText;
  return (
    <Typography style={{ ...type, fontWeight: bold ? 700 : 400, color }}>
      {children}
    </Typography>
  );
}
