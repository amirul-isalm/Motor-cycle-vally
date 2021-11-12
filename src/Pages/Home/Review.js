
import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Review = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
      fetch("https://motorcycle-vally-000.herokuapp.com/feedback")
        .then((res) => res.json())
        .then((data) => setFeedbacks(data));
    }, []);
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
                style={{
                  marginBottom: "50px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                
                {feedbacks.slice(0, 6).map((feedback, index) => (
                  <Grid item xs={4} sm={4} md={3} key={index}>
                    <SingleReview
                      key={index}
                      feedbackInfo={feedback}
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