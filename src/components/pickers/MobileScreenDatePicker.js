import React from "react";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
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
    if (val) {
      let date = new Date(getDateAsISOString(val) + "T10:20:30Z");
      handleDateChange(date);
    }
  };

  return (
    <MobileDatePicker
      label={label}
      inputFormat="yyyy-MM-dd"
      mask="____-__-__"
      value={value}
      onChange={onDateChange}
      maxDate={maxDate}
      minDate={minDate}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            marginBottom: "10px",
          }}
        />
      )}
    />
  );
};

export default LargeScreenDatePicker;
