import { LinearProgress, Container, Grid, Typography, Alert } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ManageProductCart from "./ManageProductCart";

const ManageProduct = () => {
    const [cycles, setCycles] = useState([]);
    const [success,setSuccess]=useState(false)

  useEffect(() => {
    fetch("http://localhost:5000/motorcycels")
      .then((res) => res.json())
      .then((data) => setCycles(data));
  }, [success]);

  return (
    <Container>
      {!cycles.length ? (
        <Box sx={{ mt: 5, pt: 5 }} style={{ height: "40vh" }}>
          <LinearProgress />
        </Box>
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
            Manage And Update Product <hr />
          </Typography>
          {success && (
            <Alert
              severity="success"
            sx={{my:3}}
              onClose={() => {
                setSuccess(false);
              }}
            >
              Successfully Update Price..
            </Alert>
          )}
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {cycles.map((cycle, index) => (
              <Grid item xs={4} sm={8} md={4} key={index}>
                <ManageProductCart
                  key={index}
                  cycle={cycle}
                  bikes={cycles}
                  setBikes={setCycles}
                  setSuccess={setSuccess}
                ></ManageProductCart>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default ManageProduct;
