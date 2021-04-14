import React from "react";
import { MainBodyText, BodyText } from "../../typography";
import { colors } from "../../globalStyles";

function ChartView({ style, children }) {
  return (
    <div
      style={{
        ...style,
        display: "flex",
        flexDirection: "column",
        borderRadius: 10,
        minHeight: 156,
        backgroundColor: colors.cardBg,
        // margin: 20,
        boxShadow: "1px 5px 7px #888888",
        padding: 20,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <MainBodyText>Student Number Change Per Month</MainBodyText>
        <div style={{ display: "flex", flexWrap: "nowrap", gap: 20 }}>
          <div>
            <BodyText>Applied</BodyText>
          </div>
          <div>
            <BodyText>Left</BodyText>
          </div>
        </div>
      </div>
      <div style={{}}></div>
    </div>
  );
}

export default ChartView;
