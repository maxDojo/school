import React from "react";
import { makeStyles, Hidden } from "@material-ui/core";
import {
  MainHeading,
  MainBodyText,
  SubHeading,
  BodyText,
} from "../../typography";

import Button from "../basic/ActionButton";

const classes = makeStyles((theme) => ({
  container: {
    height: 90,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "green",
    paddingLeft: 30,
    flexWrap: "nowrap",
  },
  pageTitle: {
    flexDirection: "column",
    // flex: 1,
  },
  pageActions: {
    display: "flex",
    flexWrap: "nowrap",
  },
}));

function TitleBar() {
  const styles = classes();
  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>
        <SubHeading>Dashboard</SubHeading>
        <Hidden mdDown implementation="js">
          <BodyText>View Demographics and General Info Here</BodyText>
        </Hidden>
      </div>
      <Hidden mdDown implementation="js">
        <div className={styles.pageActions}>
          <Button>Manage Users</Button>
          <Button>Manage Staff</Button>
        </div>
      </Hidden>
    </div>
  );
}

export default TitleBar;
