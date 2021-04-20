import React from "react";
import SoldierIcon from "./icons/SoldierIcon";
import { Grid, Typography } from "@material-ui/core";

const LandingPageHeader = (props) => {
  return (
    <Grid
      container
      xs={12}
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
      <Grid item style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h3">
          Welcome to Brandon's Roman Numeral Calculator
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LandingPageHeader;
