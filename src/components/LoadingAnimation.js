import { React } from "react";
import { Box } from "@mui/system";
import { LinearProgress } from "@mui/material";

const LoadingAnimation = ({ enable }) => {
  return (
    enable && (
      <Box sx={{ margin: "0px -10px 0px -10px" }}>
        <LinearProgress />
      </Box>
    )
  );
};

export default LoadingAnimation;
