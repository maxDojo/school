import React from "react";
import { makeStyles } from "@material-ui/core";
import { colors } from "../../globalStyles";
import { BodyText, MainBodyText } from "../../typography";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // flexGrow: 1,
    // flexWrap: "nowrap",
    minHeight: 156,
    borderRadius: 10,
    backgroundColor: colors.cardBg,
    // margin: 20,
    boxShadow: "1px 5px 7px #888888",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    // margin: "auto",
  },
  value: {},
}));

function InfoCard({
  imgSrc = "https://image.shutterstock.com/image-photo/healthy-woman-body-waistline-slim-600w-586777811.jpg",
  alt,
  imgBg = "inherit",
}) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div
        style={{
          height: 72,
          width: 72,
          borderRadius: "50%",
          backgroundColor: imgBg,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <img src={imgSrc} alt={alt} className={classes.image} />
      </div>
      <div
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className={classes.value}>
          <MainBodyText bold>75</MainBodyText>
          <BodyText color={colors.fadeText}>Students</BodyText>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
