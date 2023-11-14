import * as React from "react";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button, CardActionArea, CardActions } from "@material-ui/core";
import Sample from "../../assets/projects/sample.png";
// import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 150 }}>
      <CardActionArea color="primary">
        <CardMedia component="img" height="250" image={Sample} alt="green" />
        <CardContent color="success.main">
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body4" color="text.secondary ">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
