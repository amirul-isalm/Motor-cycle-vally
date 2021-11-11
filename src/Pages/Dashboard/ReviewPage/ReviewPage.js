import {
  Button,
  Container,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../Context/useAuth";

const ReviewPage = () => {
  const { user } = useAuth();
  const [feedback, setFeedback] = useState({});
  const [rating, setRating] = React.useState(3);
  console.log(rating);

  const handelBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const updateFeedbadk = {
      ...feedback,
      rating,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    };
    updateFeedbadk[name] = value;
    setFeedback(updateFeedbadk);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(feedback);
      axios.post("http://localhost:5000/addReview", { feedback })
          .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully Added  A Product");
        }
      });
  };

  return (
    <Container>
      <Typography
        sx={{ mx: "auto" }}
        style={{
          fontFamily: ` 'EB Garamond, serif`,
          color: " rgb(6, 26, 58)",

          fontWeight: "600",
          //   fontSize: "5rem",
        }}
        variant="h4"
      >
        Give Your FeedBack here..
        <hr />
      </Typography>

      <Box>
        <Typography
          sx={{ mx: "auto" }}
          style={{
            fontFamily: ` 'EB Garamond, serif`,
            color: " rgb(6, 26, 58)",

            fontWeight: "600",
            //   fontSize: "5rem",
          }}
          variant="h6"
        >
          Give Your Rating..
        </Typography>

        <Rating
          name="simple-controlled"
          value={rating}
          size="large"
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </Box>

      <form onSubmit={handelSubmit}>
        <Grid container spacing={{ xs: 1 }}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              style={{ width: "100%", marginTop: "15pX" }}
              label="Name"
              value={user?.displayName || ""}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              style={{ width: "100%", marginTop: "15pX" }}
              label="Email"
              value={user?.email || ""}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <TextField
            required
            style={{ width: "100%", marginTop: "15pX", marginLeft: "10px" }}
            label="Feedback"
            name="feedback"
            multiline
            rows={5}
            onBlur={handelBlur}
          />
        </Grid>

        <Button type="submit" sx={{ px: 5, mt: 4 }} variant="outlined">
          {" "}
          Submit{" "}
        </Button>
      </form>
    </Container>
  );
};

export default ReviewPage;
