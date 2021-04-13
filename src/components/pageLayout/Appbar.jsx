import React from "react";
import UiContext from "../../context/ui";
import {
  AppBar,
  IconButton,
  TextField,
  Toolbar,
  InputBase,
  Avatar,
  Divider,
  InputAdornment,
  Hidden,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import { colors, dimensions, pageDynamics } from "../../globalStyles";
import { SmallText, BodyText } from "../../typography";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const MainNav = withStyles({
  root: {
    backgroundColor: "#ffffff",
    height: dimensions.appbarHeight,
    color: colors.mainText,
    // fontFamily: "'Josefin Sans', sans-serif",
  },
})(AppBar);

const styles = makeStyles((theme) => ({
  toolbar: {
    margin: "auto 20px",
    // backgroundColor: "red",
  },
  searchIcon: {
    flex: 1,
  },
  nameDisplay: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default function Appbar() {
  const Ui = React.useContext(UiContext);
  const responsive = pageDynamics();
  const classes = styles();
  return (
    <MainNav position="static" elevation="none">
      {/* <div style={{ margin: "auto 20px" }}>
        <TextField name="search" placeholder="Search" />
      </div>
      <div>

      </div> */}
      <Toolbar variant="regular" className={classes.toolbar}>
        <Hidden smUp implementation="css">
          <IconButton
            edge="start"
            aria-label="menu"
            style={{ marginRight: 20 }}
            onClick={() => Ui.dispatch({ type: "appdrawer", change: true })}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <InputBase
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          placeholder="Search"
          name="search"
          className={classes.searchIcon}
        />
        <div className={responsive.desktopOnly}>
          <div className={classes.nameDisplay}>
            <BodyText bold>Gregory Newton</BodyText>
            <SmallText>Admin Manager</SmallText>
          </div>
        </div>
        <IconButton aria-label="avatar">
          <Avatar>J</Avatar>
        </IconButton>
        <ExpandMoreIcon />

        <Divider orientation="vertical" style={{ margin: "auto 10px" }} />

        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton edge="end">
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </MainNav>
  );
}
