// All style rules go here in different exported objects ..

import { makeStyles } from "@material-ui/core/styles";

export const colors = {
  main: "#6F52ED",
  background: "#f8f8fb",
  mainText: "#101010",
  fadeText: "#555555",
  siderBg: "#373B53",
  cardBg: "#ffffff",
};

export const dimensions = {
  appbarHeight: "80px",
  drawerWidth: 100,
};

export const pageDynamics = makeStyles((theme) => ({
  mobileOnly: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
  desktopOnly: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));
