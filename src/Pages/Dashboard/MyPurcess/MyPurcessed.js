import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../Context/useAuth";
import MypurcessCart from "./MypurcessCart";

const MyPurcessed = () => {
  const [bikes, setBikes] = useState([]);

  const { user } = useAuth();
  useEffect(() => {
    const url = `https://motorcycle-vally-000.herokuapp.com/orderdBiek?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, [user]);

  return (
    <Box >
      <Typography variant="h5">
        {" "}
        Your total purcessed Bike: {bikes?.length}{" "}
      </Typography>
          <Grid sx={{mt:5,pt:5}}container spacing={{ xs: 1, sm: 2, md: 3 }}>
        {bikes?.map((bike) => <MypurcessCart key={bike._id} bikes={bikes} setBikes={setBikes} bike={bike}/>)}
      </Grid>
    </Box>
  );
};

export default MyPurcessed;
