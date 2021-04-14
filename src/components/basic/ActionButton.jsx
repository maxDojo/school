import React from "react";
import { withStyles, Button } from "@material-ui/core";
import { colors } from "../../globalStyles";
import { fontFamily } from "../../typography";

const MainButton = withStyles({
  root: {
    backgroundColor: colors.background,
    color: colors.main,
    border: `1px solid ${colors.main}`,
    padding: 10,
    "&:hover": {
      backgroundColor: colors.main,
      color: colors.background,
    },
  },
  text: {
    fontFamily,
    textTransform: "capitalize",
  },
})(Button);

function ActionButton({ children, margin = 10 }) {
  return <MainButton style={{ margin: margin }}>{children}</MainButton>;
}

export default ActionButton;
