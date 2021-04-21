import React from "react";
import SoldierIcon from "./icons/SoldierIcon";
import { Grid, Typography } from "@material-ui/core";

const LandingPageHeader = (props) => {
  return (
    <Grid
      container
      justify={"center"}
      spacing={2}
      style={{
        backgroundColor: "white",
        borderBottomColor: "#343434",
        borderBottomStyle: "solid",
      }}
    >
      <Grid item xs={1}>
        <SoldierIcon height={"100px"} />
      </Grid>
      <Grid item xs={11} style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h3">
          Welcome to Brandon's Roman Numeral Converter
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LandingPageHeader;
