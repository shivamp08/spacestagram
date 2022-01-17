import React from "react";
import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ReadMoreButton = ({ expand, ...other }) => {
  return (
    <IconButton
      {...other}
      sx={{
        transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
        marginLeft: "auto",
      }}
    >
      <ExpandMoreIcon />
    </IconButton>
  );
};

export default ReadMoreButton;
