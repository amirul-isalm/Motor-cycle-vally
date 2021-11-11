import { Alert, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link,useHistory,useLocation } from "react-router-dom";
import useAuth from "../Context/useAuth";
import secure from "./secure.jpg";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const history = useHistory()
  const location=useLocation()
  const { createAccountUsingEmailPass, error, loginSuccess,setError,user} = useAuth();
 
  const handelBlure = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newData = { ...registerData };
    newData[name] = value;
    setRegisterData(newData);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.repassword) {
      return setError("password Doesnot Match");
    }

    createAccountUsingEmailPass(
      registerData.email,
      registerData.password,
      registerData.userName,history,location
    );
  };

  return (
    <Container>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={secure} alt="" />
        </Grid>
        <Grid
          style={{
            margin: "25px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          item
          xs={12}
          md={6}
        >
          <Box>
            <img
              style={{ width: "200px" }}
              src="https://i.ibb.co/Q943xHL/logo.png"
              alt=""
            />
            <Typography
              style={{
                fontFamily: ` 'EB Garamond, serif`,
                margin: "10px",
                fontWeight: 600,
              }}
              variant="h3"
            >
              Please Registresion..
              <hr style={{ width: "80%" }} />
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            {loginSuccess && (
              <Alert severity="success">Registrasion Successfully..</Alert>
            )}
            <Box
              style={{ width: "80%", margin: "auto" }}
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
            >
              <form onSubmit={handelSubmit}>
                <TextField
                  required
                  style={{ width: "95%" }}
                  onBlur={handelBlure}
                  label="Your Name"
                  type="text"
                  variant="standard"
                  name="userName"
                />
                <TextField
                  required
                  style={{ width: "95%" }}
                  onBlur={handelBlure}
                  label="Your Email"
                  type="email"
                  variant="standard"
                  name="email"
                />
                <TextField
                  required
                  style={{ width: "95%" }}
                  onBlur={handelBlure}
                  label="Password"
                  type="Password"
                  variant="standard"
                  name="password"
                />
                <TextField
                  required
                  style={{ width: "95%" }}
                  onBlur={handelBlure}
                  label="Re-Type Password"
                  type="Password"
                  variant="standard"
                  name="repassword"
                />
                <Button
                  style={{ display: "block" }}
                  sx={{ mx: "auto" }}
                  veriant="outlined"
                >
                  <Link style={{ textDecoration: "none" }} to="/login">
                    Already have an accound? Please login..
                  </Link>
                </Button>

                <Button sx={{ mt: 3 }} type="submit" variant="outlined">
                  Register
                </Button>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
