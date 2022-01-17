import { React, useState, useEffect } from "react";
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
  const [date, setDate] = useState();

  useEffect(() => {
    if (date) {
      const delay = setTimeout(() => {
        handleDateChange(new Date(getDateAsISOString(date) + "T10:20:30Z"));
      }, 800);

      return () => clearTimeout(delay);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <DesktopDatePicker
      label={label}
      inputFormat="yyyy-MM-dd"
      mask="____-__-__"
      value={value}
      onChange={(val) => setDate(val)}
      maxDate={maxDate}
      minDate={minDate}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default LargeScreenDatePicker;
