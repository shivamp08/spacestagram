import React from "react";
import Post from "./Post";
import { Box } from "@mui/system";

const Content = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      {data &&
        data.map((p, i) => p.media_type !== "video" && <Post {...p} key={i} />)}
    </Box>
  );
};

export default Content;
