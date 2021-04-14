import React from "react";
import { AppBar } from "@material-ui/core";

// import internal dependencies
import { MainBodyText } from "../../typography";
import { colors, dimensions } from "../../globalStyles";

// import components
import Appbar from "../pageLayout/Appbar";
import Sider from "../pageLayout/Sider";
import TitleBar from "../pageLayout/TitleBar";
import MainContent from "../pageLayout/MainContent";

function Layout() {
  return (
    <div
      style={{
        backgroundColor: colors.background,
        height: "100vh",
        display: "flex",
        // justifyContent: "stretch",
        // backgroundColor: "red",
      }}
    >
      <div>
        <Sider />
      </div>
      <div style={{ flex: 2 }}>
        {/* <div style={{ marginBottom: dimensions.appbarHeight }}> */}
        <div>
          <Appbar />
        </div>
        <div
          style={{ padding: 20, paddingTop: 0, width: "100%", height: "100%" }}
        >
          <TitleBar />
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default Layout;
