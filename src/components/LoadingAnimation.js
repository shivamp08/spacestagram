import { React } from "react";
import { Box } from "@mui/system";
import { LinearProgress } from "@mui/material";

const LoadingAnimation = ({ enable }) => {
  return (
    enable && (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    )
  );
};

export default LoadingAnimation;
