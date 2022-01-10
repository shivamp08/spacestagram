import React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";

const NavigationBar = ({ title }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Typography
        variant="h3"
        component="div"
        sx={{
          color: "black",
          fontFamily: "myriad-pro-condensed, sans-serif",
          margin: "5px 0px 10px 10px",
        }}
      >
        {title}
      </Typography>
    </AppBar>
  );
};

export default NavigationBar;
