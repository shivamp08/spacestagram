import { React, useState } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Typography,
} from "@mui/material";
import ReadMoreButton from "./buttons/ReadMoreButton";
import LikeButton from "./buttons/LikeButton";
import { getDateAsPrettyString } from "../utils/date";

const Post = ({ title, date, explanation, url }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ margin: "auto auto 50px auto", maxWidth: "500px" }}>
      <CardHeader title={title} subheader={getDateAsPrettyString(date)} />
      <CardMedia component="img" alt="Paella dish" image={url} />
      <CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography align="justify">{explanation}</Typography>
        </Collapse>
      </CardContent>
      <CardActions disableSpacing>
        <LikeButton />
        <ReadMoreButton
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="explanation"
        />
      </CardActions>
    </Card>
  );
};

export default Post;
