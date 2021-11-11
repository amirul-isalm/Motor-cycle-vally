import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../Context/useAuth";
import ManageBikeCart from "./ManageBikeCart";
const ManageAllOrder = () => {
     const [bikes, setBikes] = useState([]);

     const { user } = useAuth();
     useEffect(() => {
       const url = `http://localhost:5000/allorderdBieks`;
       fetch(url)
         .then((res) => res.json())
         .then((data) => setBikes(data));
     }, []);
  return (
    <Box>
      <Typography variant="h5">
        {" "}
        Your total purcessed Bike: {bikes?.length}{" "}
      </Typography>
      <Grid sx={{ mt: 5, pt: 5 }} container spacing={{ xs: 1 }}>
        {bikes?.map((bike) => (
          <ManageBikeCart
            key={bike._id}
            bikes={bikes}
            setBikes={setBikes}
            bike={bike}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ManageAllOrder;
