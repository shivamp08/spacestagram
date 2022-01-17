import React from "react";
import { Box } from "@mui/system";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Typography } from "@mui/material";
import LargeScreenDatePicker from "./LargeScreenDatePicker.js";
import MobileScreenDatePicker from "./MobileScreenDatePicker.js";

const DateRangePicker = ({ startDate, endDate, handle, largeScreen }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {largeScreen ? (
          <LargeScreenDatePicker
            label={"Start Date"}
            value={startDate}
            maxDate={endDate}
            minDate={new Date("1995-06-16T10:20:30Z")}
            handleDateChange={handle.StartDateChange}
          />
        ) : (
          <MobileScreenDatePicker
            label={"Start Date"}
            value={startDate}
            maxDate={endDate}
            minDate={new Date("1995-06-16T10:20:30Z")}
            handleDateChange={handle.StartDateChange}
          />
        )}
        <Typography sx={{ margin: "0px 10px 0px 10px", color: "black" }}>
          to
        </Typography>
        {largeScreen ? (
          <LargeScreenDatePicker
            label={"End Date"}
            value={endDate}
            maxDate={new Date()}
            minDate={startDate}
            handleDateChange={handle.EndDateChange}
          />
        ) : (
          <MobileScreenDatePicker
            label={"End Date"}
            value={endDate}
            maxDate={new Date()}
            minDate={startDate}
            handleDateChange={handle.EndDateChange}
          />
        )}
      </LocalizationProvider>
    </Box>
  );
};

export default DateRangePicker;
