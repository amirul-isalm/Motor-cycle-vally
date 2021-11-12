import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia, Rating } from "@mui/material";
const SingleReview = ({ feedbackInfo }) => {
    const { rating, name, email, photo, feedback, date } = feedbackInfo;

  return (
    <Box style={{ border: "1px solid cyan", borderRadius: "10px" }}>
      <CardContent>
        <img
          style={{ width: "50px", borderRadius: "50%" }}
          src={photo}
          alt=" "
        />
        <br />
        <Rating name="read-only" value={rating} readOnly />
        <Typography sx={{ fontSize: 17, fontWeight: 500 }} component="div">
          {name}
        </Typography>
        <Typography sx={{ fontSize: 13 }}>{email}</Typography>

        <Typography s variant="body2">
          {feedback}
        </Typography>

        <Typography variant="caption">{date}</Typography>
      </CardContent>
    </Box>
  );
};

export default SingleReview;
