import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";

const AddANewProduct = () => {
  const [newBike, setNewBike] = useState({});
  const [addSuccessfully, setAddSuccessfully] = useState(false);

  const handelBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const modifyData = { ...newBike };
    modifyData[name] = value;
    setNewBike(modifyData);
    console.log(newBike);
  };

  const handelSubmit = (e) => {
    
    e.preventDefault();

    axios
      .post("https://motorcycle-vally-000.herokuapp.com/addABike", { newBike })

      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully Added  A Product");
          e.target.reset();
          setAddSuccessfully(true)

        }
      });
  };

  return (
    <Box>
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
        Add A New Bike For Your Collection.
        <hr />
      </Typography>

      {addSuccessfully&&
        <Alert onClose={() => {setAddSuccessfully(false)}}>
        Successfully Add A New Bike..
        </Alert>
      }
      <form onSubmit={handelSubmit}>
        <TextField
          required
          style={{ width: "100%", marginTop: "15pX" }}
          label="Bike Name"
          name="name"
          onBlur={handelBlur}
        />

        <Grid container spacing={{ xs: 2 }}>
          <Grid item xs={6}>
            <TextField
              required
              style={{ width: "100%", marginTop: "15pX" }}
              label="Engine (cc)"
              name="engine"
              onBlur={handelBlur}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              style={{ width: "100%", marginTop: "15pX" }}
              label="Mileage (KM/L)"
              name="mileage"
              onBlur={handelBlur}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              style={{ width: "100%", marginTop: "15pX" }}
              label="Fuel Tank (L)"
              name="fuelTank"
              onBlur={handelBlur}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              style={{ width: "100%", marginTop: "15pX" }}
              label="Price (Tk)"
              name="priec"
              onBlur={handelBlur}
            />
          </Grid>
        </Grid>

        <TextField
          required
          style={{ width: "100%", marginTop: "15pX" }}
          label="Photo (URL)"
          name="photo"
          onBlur={handelBlur}
        />
        <TextField
          required
          style={{ width: "100%", marginTop: "15pX" }}
          label="About Bike"
          name="about"
          multiline
          rows={4}
          onBlur={handelBlur}
        />
        <br />

        <Button sx={{ mt: 4 }} type="submit" variant="outlined">
          {" "}
          Add Bike
        </Button>
      </form>
    </Box>
  );
};

export default AddANewProduct;
