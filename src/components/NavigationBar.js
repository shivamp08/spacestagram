import { React } from "react";
import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";
import LoadingAnimation from "./LoadingAnimation";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import DateRangePicker from "./pickers/DateRangePicker";

const NavigationBar = ({ title, loading, startDate, endDate, handle }) => {
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "white", padding: "0px 10px 0px 10px" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: largeScreen ? "row" : "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          component="div"
          position="sticky"
          sx={{
            color: "black",
            fontFamily: "myriad-pro-condensed, sans-serif",
            margin: "5px 0px 15px 10px",
          }}
        >
          {title}
        </Typography>
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          handle={handle}
          largeScreen={largeScreen}
        />
      </Box>
      <LoadingAnimation enable={loading} />
    </AppBar>
  );
};

export default NavigationBar;
