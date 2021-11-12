import { Feedback } from '@mui/icons-material';
import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Review = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/feedback")
        .then((res) => res.json())
        .then((data) => setFeedbacks(data));
    }, []);
    console.log(feedbacks)
    return (
      <Container>
        {!feedbacks.length ? (
          <CircularProgress />
        ) : (
          <Box>
            <Typography
              style={{
                fontFamily: ` 'EB Garamond, serif`,
                margin: "10px",
                fontWeight: 600,
              }}
              variant="h3"
            >
              Our Reviews
              <hr />
            </Typography>

            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {feedbacks.slice(0, 6).map((cycle, index) => (
                <Grid item xs={12} sm={4} md={4} key={index}>
                  <SingleReview
                    key={index}
                    cycle={cycle}
                  ></SingleReview>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    );
};

export default Review;