import React from "react";
import { Typography } from "@material-ui/core";
import { colors } from "./globalStyles";

const styles = {
  mainHeading: {
    fontSize: 30,
    fontFamily: "'Josefin Sans', sans-serif",
  },
  subHeading: {
    fontSize: 24,
    fontFamily: "'Josefin Sans', sans-serif",
  },
  mainBodyText: {
    fontSize: 18,
    fontFamily: "'Josefin Sans', sans-serif",
  },
  bodyText: {
    fontSize: 14,
    fontFamily: "'Josefin Sans', sans-serif",
  },
  smallText: {
    fontSize: 12,
    fontFamily: "'Josefin Sans', sans-serif",
  },
  tinyText: {
    fontSize: 10,
    fontFamily: "'Josefin Sans', sans-serif",
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

export function MainBodyText({ children }) {
  return <Typography style={styles.mainBodyText}>{children}</Typography>;
}

export function BodyText({ children, bold }) {
  return (
    <Typography style={{ ...styles.bodyText, fontWeight: bold ? 700 : 400 }}>
      {children}
    </Typography>
  );
}

export function SmallText({ children, tiny, bold, color }) {
  let type = tiny ? styles.tinyText : styles.smallText;
  return (
    <Typography style={{ ...type, fontWeight: bold ? 700 : 400, color: color }}>
      {children}
    </Typography>
  );
}
