import { LinearProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SingleMotorCycle from '../SharedComponent/SingleMotorCycle';

const Explore = () => {const [cycles, setCycles] = useState([]);

useEffect(() => {
  fetch("https://motorcycle-vally-000.herokuapp.com/motorcycels")
    .then((res) => res.json())
    .then((data) => setCycles(data));
}, []);

return (
  <Container>
    {!cycles.length ? (
      <Box sx={{ mt: 5,pt:5 }} style={{ height: "40vh" }}>
        <LinearProgress  />
      </Box>
    ) : (
      <Box>
        <Typography
          style={{
            fontFamily: ` 'EB Garamond, serif`,
            margin: "10px",
            fontWeight: 600,
          }}
          variant="h2"
        >
          Our All Collection
          <hr />
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {cycles.map((cycle, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <SingleMotorCycle key={index} cycle={cycle}></SingleMotorCycle>
            </Grid>
          ))}
        </Grid>
      </Box>
    )}
  </Container>
);
};

export default Explore;