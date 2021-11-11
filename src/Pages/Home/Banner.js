import { Grid, Typography } from '@mui/material';
import { Box, height } from '@mui/system';
import React from 'react';
import banner from "./images/banner.jpg"
import Button from "@mui/material/Button";
import motor from "./images/motor.jpg"
import { useHistory } from 'react-router';



const Banner = () => {
  const history=useHistory()
  const bannerStyle = {
    background: `url(${banner})`,
    backgroundPosition: "center",
    minHeight: "92vh",
    width: "100%",
    backgroundSize:"cover"
  };
  
    
  return (
    <Box style={bannerStyle} sx={{ py: 5 }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ h: 100, w: 100 }}>
          <Box sx={{ mt: 4, px: 2 }} style={{ textAlign: "left" }}>
            <Typography
              sx={{ mx: "auto" }}
              style={{
                fontFamily: ` 'EB Garamond, serif`,
                color: " rgb(6, 26, 58)",
                textAlign: "left",
                fontWeight: "600",
                //   fontSize: "5rem",
              }}
              variant="h2"
            >
              You can buy a bike, and that’s a lot of happiness
            </Typography>
            <Typography
              style={{
                fontFamily: ` 'EB Garamond, serif`,
                margin: "10px",
                textAlign: "left",
              }}
              variant="h4"
            >
              Driving a motorcycle is likes flying.
            </Typography>
            <Button onClick={()=>history.push("/explore")}
              sx={{ px: 2, m: 2 }}
              style={{ fontSize: "20px", fontFamily: ` 'EB Garamond, serif` }}
              variant="contained"
            >
              Explore Now!
            </Button>

            

            <Box>
              <Grid container>
                <Grid item md={8} sx={{ h: 100, w: 100, pt: 2 }}>
                  <img
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      margin: "10px",
                      height: "80%",
                    }}
                    src={motor}
                    alt=""
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;