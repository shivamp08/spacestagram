import { React, useState, useEffect } from "react";
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
  const [date, setDate] = useState();

  useEffect(() => {
    if (date) {
      handleDateChange(new Date(getDateAsISOString(date) + "T10:20:30Z"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <MobileDatePicker
      label={label}
      inputFormat="yyyy-MM-dd"
      mask="____-__-__"
      value={value}
      onAccept={(val) => setDate(val)}
      onChange={() => setDate(null)}
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
