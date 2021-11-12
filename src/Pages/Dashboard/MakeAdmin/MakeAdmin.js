import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const [success,setSuccess]=useState(false)
  const handelBlur = (e) => {
    const Email = e.target.value;
    setEmail(Email);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
      const user = { email };
      
      const confirm = window.confirm(`Are you sure add ${email} as a admin?`)
      if (confirm) {

          fetch("http://localhost:5000/users/admin", {
              method: "PUT",
              headers: {
                  // authorizetion: `Bearer ${token}`,
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
          })
              .then((res) => res.json())
              .then((data) => {
                  if (data.modifiedCount) {
                       setSuccess(true)
                   }
              })
      }
e.target.reset()

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
        Add An Admin
        <hr />
      </Typography>
      {success && (
        <Alert
          severity="success"
          sx={{ my: 3 }}
          onClose={() => {
            setSuccess(false);
          }}
        >
          Successfully Make An Admin..
        </Alert>
      )}
      <form onSubmit={handelSubmit}>
        <Grid
          container
          style={{ display: "flex", justifyContent: "center" }}
          spacing={3}
        >
          <Grid item xs={11} sm={9} md={6}>
            <TextField
              required
              type="email"
              style={{
                width: "100%",
                marginTop: "15pX",
              }}
              label="Enter Target Email.."
              onBlur={handelBlur}
            />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ px: 4, mt: 2 }} variant="outlined">
          Make Admin
        </Button>
      </form>
    </Box>
  );
};

export default MakeAdmin;
