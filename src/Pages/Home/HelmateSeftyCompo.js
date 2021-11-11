import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bg from "./images/helmet.jpeg";
import helmet from "./images/helmet2.jpg";

const HelmateSeftyCompo = () => {
  const containerStyle = {
    backgroundImage: `url(${bg})`,
    minHeight: "650px",
    backgroundSize: "cover",

    backgroundPosition: "center",
      backgroundAttachment: "fixed",
    margin:"30px auto"
  };
  return (
    <Box style={containerStyle}>
      <Grid  container>
              <Grid item xs={12} md={6} sx={{ h: 100, w: 100 }}>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <img style={{ width:"90%"}} src={helmet} alt="" />

        </Grid>

        <Grid item xs={12} md={6} sx={{ h: 100, w: 100 }}>
          <Container sx={{ pt: 5 }} style={{ textAlign: "right" }}>
            <Typography
              sx={{ mx: "auto" }}
              style={{
                fontFamily: ` 'EB Garamond, serif`,
                color: " white",
                textAlign: "right",
                fontWeight: "600",

                //   fontSize: "5rem",
              }}
              variant="h1"
            >
              WEAR A <br /> HELMET <br /> FOR YOUR <br /> SEFTY
            </Typography>
            <Typography
              sx={{ mx: "auto" }}
              style={{
                fontFamily: ` 'EB Garamond, serif`,
                color: " white",
                textAlign: "right",
                fontWeight: "500",

                //   fontSize: "5rem",
              }}
              variant="h3"
            >
              Helmet Saves Life!
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HelmateSeftyCompo;
