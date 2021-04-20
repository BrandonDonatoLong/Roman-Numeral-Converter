import React from "react";
import SoldierIcon from "./icons/SoldierIcon";
import { Grid, Typography } from "@material-ui/core";

const LandingPageHeader = (props) => {
  return (
    <Grid container justify={"space-evenly"}>
      <Grid item style={{ width: "50px" }}>
        <SoldierIcon />
      </Grid>
      <Grid item style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h3">
          Welcome to Brandon's Roman Numeral Calculator
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LandingPageHeader;
