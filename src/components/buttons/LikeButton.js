import { React, useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <IconButton
      sx={{ color: liked ? "red" : "gray" }}
      onClick={() => setLiked(!liked)}
    >
      <FavoriteIcon />
    </IconButton>
  );
};

export default LikeButton;
