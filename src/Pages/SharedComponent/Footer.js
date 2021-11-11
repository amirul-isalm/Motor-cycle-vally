import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <Box
      sx={{ pb: 2 ,mt:5}}
      style={{
        backgroundColor: "black",
        
        fontFamily: ` 'EB Garamond, serif`,
      }}
    >
      <Grid
        container
        sx={{ py: 3, color: "white" }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item style={{ paddingLeft: "25px" }} xs={4} sm={4} md={3}>
          <img
            style={{ width: "200px" }}
            src="https://i.ibb.co/Q943xHL/logo.png"
            alt=""
          />
          <Typography
            style={{
              fontFamily: ` 'EB Garamond, serif`,
              color: " red",

              fontWeight: "600",
              marginBottom: "10px",
            }}
            variant="h4"
          >
            DO YOU HAVE QUESTIONS? <br />
            DO NOT WAIT, LET’S TALK
          </Typography>
        </Grid>
        <Grid item xs={4} sm={2} md={3}>
          <Typography
            style={{ fontFamily: ` 'EB Garamond, serif`, color: "goldenrod" }}
            variant="h5"
          >
            HEAD OFFICE
          </Typography>

          <Typography
            style={{ fontFamily: ` 'EB Garamond, serif`, marginTop: "5px" }}
            variant="h6"
          >
            24 No Appartment,
            <br />
            Robule Market, <br />
            Shalgariya,
            <br />
            Pabna. <br />
          </Typography>
        </Grid>
        <Grid item xs={4} sm={2} md={3}>
          <Typography
            style={{ fontFamily: ` 'EB Garamond, serif`, color: "goldenrod" }}
            variant="h5"
          >
            IMMPORTANT LINKS
          </Typography>
          <Typography
            style={{ fontFamily: ` 'EB Garamond, serif`, color: "white" }}
          >
            <a
              style={{
                textDecoration: "none",
                fontSize: "20px",
                color: "white",
              }}
              href=" "
            >
              Service{" "}
            </a>{" "}
            <br />
            <a
              style={{
                textDecoration: "none",
                fontSize: "20px",
                color: "white",
              }}
              href=" "
            >
              Contact
            </a>{" "}
            <br />
            <a
              style={{
                textDecoration: "none",
                fontSize: "20px",
                color: "white",
              }}
              href=" "
            >
              Address{" "}
            </a>{" "}
            <br />
            <a
              style={{
                textDecoration: "none",
                fontSize: "20px",
                color: "white",
              }}
              href=" "
            >
              Our Mission
            </a>{" "}
            <br />
            <a
              style={{
                textDecoration: "none",
                fontSize: "20px",
                color: "white",
              }}
              href=" "
            >
              Blogs
            </a>
          </Typography>
        </Grid>
        <Grid item xs={4} sm={8} md={3}>
          <Typography
            style={{ fontFamily: ` 'EB Garamond, serif`, color: "goldenrod" }}
            variant="h5"
          >
            SOCIAL MEDIA
          </Typography>

          <Typography color="white" variant="h6">
            {" "}
            <br />{" "}
            <a href="https://www.facebook.com/">
              <FacebookIcon sx={{ color: "white" }} />
            </a>{" "}
            <a href="https://twitter.com/tweeter">
              <TwitterIcon sx={{ color: "white" }} />
            </a>{" "}
            <a href="https://www.google.com/">
              <GoogleIcon sx={{ color: "white" }} />
            </a>{" "}
            <a href="https://www.instagram.com/">
              <InstagramIcon sx={{ color: "white" }} />{" "}
            </a>{" "}
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "goldenrod", fontFamily: ` 'EB Garamond, serif` }}
          >
            <PhoneAndroidIcon /> (+880) 01789101112 <br />
            <EmailIcon /> example@example.com
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={8} md={12}>
          <Typography color="white" variant="body">
            {" "}
            <br />
            Copyright © 2021. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
