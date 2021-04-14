import React from "react";
import InfoCard from "../basic/InfoCard";
import { makeStyles } from "@material-ui/core";
import ChartView from "../block/ChartView";

const styles = makeStyles((theme) => ({
  headBoard: {
    // width: "100%",
    display: "grid",
    margin: "20px auto",
    gridTemplateColumns: "repeat(auto-fit, minmax(360px, auto))",
    gridAutoRows: 156,
    gap: 30,
    flexWrap: "wrap",
  },
  chartDiv: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 30,
    marginTop: 50,
    gridAutoRows: 156,
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
}));

const cards = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

function MainContent() {
  const classes = styles();
  return (
    <React.Fragment>
      <div className={classes.headBoard}>
        {cards.map((card) => (
          <InfoCard key={card.id} />
        ))}
      </div>
      <div className={classes.chartDiv}>
        <ChartView
          style={{
            gridColumn: "1/3",
            gridRow: "1/3",
          }}
        />
        <ChartView
          style={{
            gridColumn: "3/4",
            gridRow: "1/4",
          }}
        />
        <ChartView
          style={{
            gridColumn: "4",
            gridRow: "1/4",
          }}
        />
        <InfoCard
          style={
            {
              // gridColumn: "1/4",
              // gridRow: "1/4",
            }
          }
        />
        <InfoCard
          style={
            {
              // gridColumn: "1/4",
              // gridRow: "1/4",
            }
          }
        />
      </div>
    </React.Fragment>
  );
}

export default MainContent;
