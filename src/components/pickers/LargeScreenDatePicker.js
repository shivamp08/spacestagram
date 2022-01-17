import React from "react";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TextField from "@mui/material/TextField";

import { getDateAsISOString } from "../../utils/date";

const LargeScreenDatePicker = ({
  label,
  value,
  maxDate,
  minDate,
  handleDateChange,
}) => {
  const onDateChange = (val) => {
    let date = new Date(getDateAsISOString(val) + "T10:20:30Z");
    handleDateChange(date);
  };

  return (
    <DesktopDatePicker
      label={label}
      inputFormat="yyyy-MM-dd"
      mask="____-__-__"
      value={value}
      onChange={onDateChange}
      maxDate={maxDate}
      minDate={minDate}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default LargeScreenDatePicker;
