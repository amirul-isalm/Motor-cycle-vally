import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import secure from "./secure.jpg";
import useAuth from "../Context/useAuth";
import GoogleIcon from "@mui/icons-material/Google";
import LoadingButton from "@mui/lab/LoadingButton";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const location = useLocation();
  const { loginUsingEmailPass, error, loginSuccess, loginWithGoogle } =
    useAuth();
  const handelBlure = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newData = { ...loginData };
    newData[name] = value;
    setLoginData(newData);
  };
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
    loginWithGoogle(history,location)

  }

  const handelSubmit = (e) => {
    e.preventDefault();
    loginUsingEmailPass(loginData.email, loginData.password, history, location);
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
              Please Login..
              <hr />
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            {loginSuccess && (
              <Alert severity="success">Login Successfully..</Alert>
            )}
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
            >
              <form onSubmit={handelSubmit}>
                <TextField
                  required
                  style={{ width: "95%" }}
                  label="Your Email"
                  type="email"
                  variant="standard"
                  name="email"
                  onBlur={handelBlure}
                />
                <TextField
                  required
                  style={{ width: "95%" }}
                  label="Password"
                  type="Password"
                  variant="standard"
                  name="password"
                  onBlur={handelBlure}
                />
                <Button
                  style={{ display: "block" }}
                  sx={{ mx: "auto" }}
                  veriant="outlined"
                >
                  <Link style={{ textDecoration: "none" }} to="/register">
                    New user? Please register..
                  </Link>
                </Button>
                <Button sx={{ mt: 3 }} type="submit" variant="outlined">
                  Login
                </Button>
              </form>
            </Box>
            <Box sx={{ mt:5 }}>
              <Typography
                style={{
                  fontFamily: ` 'EB Garamond, serif`,
                  color: " rgb(6, 26, 58)",

                  fontWeight: "600",
                  //   fontSize: "5rem",
                }}
                variant="h5"
              >
                --OR--
              </Typography>
              <LoadingButton 
                color="secondary"
                onClick={handleClick}
                loading={loading}
                loadingPosition="start"
                startIcon={<GoogleIcon />}
                variant="contained"
              >
                Login in with Google
              </LoadingButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
