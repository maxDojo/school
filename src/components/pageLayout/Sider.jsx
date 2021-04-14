import React from "react";
import UiContext from "../../context/ui";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import BarChartIcon from "@material-ui/icons/BarChart";
import DescriptionIcon from "@material-ui/icons/Description";
import SettingsIcon from "@material-ui/icons/Settings";

import { dimensions, colors } from "../../globalStyles";
import { SmallText } from "../../typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: dimensions.drawerWidth,
      flexShrink: 0,
      height: "100vh",
    },
  },
  // appBar: {
  //   [theme.breakpoints.up("sm")]: {
  //     width: `calc(100% - ${drawerWidth}px)`,
  //     marginLeft: drawerWidth,
  //   },
  // },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: dimensions.drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: "1em",
    width: dimensions.drawerWidth * 0.7,
    height: dimensions.drawerWidth * 0.7,
    margin: "10px auto",
    // padding: "auto",
    "&:hover": {
      backgroundColor: colors.background,
    },
  },
  menuIcon: {
    // margin: "auto",
    fontSize: 30,
    color: "#969cba",
  },
}));

function ResponsiveDrawer(props) {
  const Ui = React.useContext(UiContext);
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        // backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: colors.siderBg,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Divider />
      <div style={{ flex: 1 }}>
        <div className={classes.iconContainer}>
          <FolderOpenIcon className={classes.menuIcon} />
          <SmallText tiny bold color={colors.fadeText}>
            View Files
          </SmallText>
        </div>
        <div className={classes.iconContainer}>
          <BarChartIcon className={classes.menuIcon} />
          <SmallText tiny bold color={colors.fadeText}>
            Dashboard
          </SmallText>
        </div>
        <div className={classes.iconContainer}>
          <MailIcon className={classes.menuIcon} />
          <SmallText tiny bold color={colors.fadeText}>
            Mail
          </SmallText>
        </div>
        <div className={classes.iconContainer}>
          <DescriptionIcon className={classes.menuIcon} />
          <SmallText tiny bold color={colors.fadeText}>
            Records
          </SmallText>
        </div>
      </div>
      <div>
        <div className={classes.iconContainer}>
          <SettingsIcon className={classes.menuIcon} />
          <SmallText tiny bold color={colors.fadeText}>
            Settings
          </SmallText>
        </div>
      </div>
    </div>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <nav className={classes.drawer} aria-label="side navigation">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            // container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={Ui.state.appDrawer}
            onClose={() => Ui.dispatch({ type: "appdrawer", change: false })}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </React.Fragment>
  );
}

export default ResponsiveDrawer;
