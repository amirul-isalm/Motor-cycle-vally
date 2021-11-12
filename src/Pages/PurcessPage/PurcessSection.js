import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PurcessInformation from "./PurcessInformation";

const PurcessSection = () => {
  const { id } = useParams();
  const [cycle, setCycle] = useState({});


  useEffect(() => {
    fetch(`https://motorcycle-vally-000.herokuapp.com/motorcycels/${id}`)
      .then((res) => res.json())
      .then((data) => setCycle(data));
  }, [id]);
  const { photo, priec, engine, name, mileage, fuelTank, about } = cycle;

  return (
    <Container>
      <Grid
        container
        rowSpacing={1}
        style={{ margin: "35px 0" }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} sx={{ px: 2 }} md={12} lg={12}>
          <img style={{ maxWidth: "100%" }} src={photo} alt="" />
        </Grid>
        <Grid item xs={12} md={12} lg={5}>
          <Typography
            style={{
              fontFamily: ` 'EB Garamond, serif`,
              margin: "10px",
              fontWeight: 600,
            }}
            variant="h3"
          >
            Please fill this form <br /> for purcess..
            <hr />
          </Typography>

<PurcessInformation  cycle={cycle}  ></PurcessInformation>

        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{ textAlign: "left", margin: "10px auto" }}
          lg={7}
        >
          <Typography variant="h3">{name}</Typography>

          <Box style={{ margin: "10px auto" }}>
            <Typography variant="body">
              Price: {priec} <br />
              Engine: {engine} <br />
              Mileage: {mileage} <br />
              Fuel Tank: {fuelTank} <br />
            </Typography>
          </Box>

          <Typography style={{ textAlign: "left" }} variant="body">
            {about}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PurcessSection;
