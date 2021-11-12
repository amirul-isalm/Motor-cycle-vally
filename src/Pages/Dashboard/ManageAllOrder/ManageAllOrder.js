import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../Context/useAuth";
import ManageBikeCart from "./ManageBikeCart";

const ManageAllOrder = () => {
  const [bikes, setBikes] = useState([]);

  const { token } = useAuth();
  useEffect(() => {
    const url = `http://localhost:5000/allorderdBieks`;
    fetch(url, {
      headers: {
        authorizetion: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);
  return (
    <Box>
      <Typography variant="h5"> Total Orderd Bike: {bikes?.length} </Typography>
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
