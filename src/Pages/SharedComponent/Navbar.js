import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useAuth from "../Context/useAuth";

const Navbar = () => {
 
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { user, logOut } = useAuth();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

 

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button veriant="outlined">
          <Link style={{ textDecoration: "none", color: "black" }} to="/home">
            Home
          </Link>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button veriant="outlined">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/explore"
          >
            Explore
          </Link>
        </Button>
      </MenuItem>
      {!user.email && (
        <Box>
          <MenuItem>
            <Button veriant="outlined">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/login"
              >
                Login
              </Link>
            </Button>
          </MenuItem>
        </Box>
      )}
      {user.email && (
        <Box>
          <MenuItem>
            <Button veriant="outlined">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/explore"
              >
                Dashboard
              </Link>
            </Button>
          </MenuItem>
          <MenuItem>
            <Button onClick={logOut} style={{ color: "black" }}>
              Logout
            </Button>
          </MenuItem>
          <MenuItem>
            <Button style={{ color: "black" }}>{user?.displayName}</Button>
            <Button>
              <img
                style={{ width: "40px", borderRadius: "50%" }}
                src={user?.photoURL}
                alt=""
              />
            </Button>
          </MenuItem>
        </Box>
      )}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            style={{ fontFamily: ` 'EB Garamond, serif`, fontWeight: "600" }}
            variant="h4"
          >
            Motorcycle-Vally
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button veriant="outlined">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/home"
              >
                Home
              </Link>
            </Button>
            <Button veriant="outlined">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/explore"
              >
                Explore
              </Link>
            </Button>
            {!user.email && (
              <Button veriant="outlined">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/login"
                >
                  Login
                </Link>
              </Button>
            )}
            {user.email && (
              <Box>
                <Button veriant="outlined">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </Button>
                <Button onClick={logOut} style={{ color: "white" }}>
                  Logout
                </Button>
                <Button style={{ color: "white" }}>{user?.displayName}</Button>
                <Button>
                  <img
                    style={{ width: "40px", borderRadius: "50%" }}
                    src={user?.photoURL}
                    alt=""
                  />
                </Button>
              </Box>
            )}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
};

export default Navbar;
