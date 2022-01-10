import React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Post = () => {
  return (
    <Card sx={{ margin: "auto", maxWidth: "800px" }}>
      <CardHeader
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        alt="Paella dish"
        image="https://apod.nasa.gov/apod/image/2201/JupiterOpal_HubbleMasztalerz_1880.jpg"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          What will become of Jupiter's Great Red Spot? Gas giant Jupiter is the
          solar system's largest world with about 320 times the mass of planet
          Earth. Jupiter is home to one of the largest and longest lasting storm
          systems known, the Great Red Spot (GRS), visible to the left. The GRS
          is so large it could swallow Earth, although it has been shrinking.
          Comparison with historical notes indicate that the storm spans only
          about one third of the exposed surface area it had 150 years ago.
          NASA's Outer Planets Atmospheres Legacy (OPAL) program has been
          monitoring the storm more recently using the Hubble Space Telescope.
          The featured Hubble OPAL image shows Jupiter as it appeared in 2016,
          processed in a way that makes red hues appear quite vibrant. Modern
          GRS data indicate that the storm continues to constrict its surface
          area, but is also becoming slightly taller, vertically. No one knows
          the future of the GRS, including the possibility that if the shrinking
          trend continues, the GRS might one day even do what smaller spots on
          Jupiter have done -- disappear completely.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
