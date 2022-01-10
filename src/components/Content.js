import React from "react";
import Post from "./Post";
import { Box } from "@mui/system";

const Content = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Post />
    </Box>
  );
};

export default Content;
