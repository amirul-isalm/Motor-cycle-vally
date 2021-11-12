import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import LogoutIcon from "@mui/icons-material/Logout";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import BallotIcon from "@mui/icons-material/Ballot";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import BreakfastDiningSharpIcon from "@mui/icons-material/BreakfastDiningSharp";
import Payment from "./Payment";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import MyPurcessed from "./MyPurcess/MyPurcessed";
import ManageAllOrder from "./ManageAllOrder/ManageAllOrder";
import AddANewProduct from "./AddANewProduct/AddANewProduct";
import ReviewPage from "./ReviewPage/ReviewPage";
import ManageProduct from "./ManageProduct/ManageProduct";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import useAuth from "../Context/useAuth";
import { Button } from "@mui/material";
import AdminRoute from "../PrivetRouteAndAdminRoute/AdminRoute";
const drawerWidth = 260;

function Dashboard(props) {
  const { logOut, user, admin } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  
  const drawer = (
    <div>
      
        <img
          style={{ width: "140px", marginTop: "9px" }}
          src="https://i.ibb.co/Q943xHL/logo.png"
          alt=" "
        />
    
      <Divider />
      <List>
        <ListItem>
          <Button>
            <HomeSharpIcon sx={{ mx: 1 }} />
            <Link style={{ textDecoration: "none", color: "purple" }} to="/">
              Home
            </Link>
          </Button>
        </ListItem>
        <ListItem>
          <Button>
            <TwoWheelerIcon sx={{ mx: 1 }} />
            <Link
              style={{ textDecoration: "none", color: "purple" }}
              to="/explore"
            >
              Explore
            </Link>
          </Button>
        </ListItem>
        {!admin ? (
          <>
            {" "}
            <ListItem>
              <Button>
                <PaymentsIcon sx={{ mx: 1 }} />
                <Link
                  style={{ textDecoration: "none", color: "purple" }}
                  to={`${url}/payment`}
                >
                  Payment
                </Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button>
                <ShoppingCartIcon sx={{ mx: 1 }} />
                <Link
                  style={{ textDecoration: "none", color: "purple" }}
                  to={`${url}/mypurcessed`}
                >
                  My Purcessed
                </Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button>
                <RateReviewIcon sx={{ mx: 1 }} />
                <Link
                  style={{ textDecoration: "none", color: "purple" }}
                  to={`${url}/review`}
                >
                  Review
                </Link>
              </Button>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem>
              <Button>
                <BallotIcon sx={{ mx: 1 }} />
                <Link
                  style={{ textDecoration: "none", color: "purple" }}
                  to={`${url}/manageAllOrder`}
                >
                  Manage All Orders
                </Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button>
                <AddBoxIcon sx={{ mx: 1 }} />
                <Link
                  style={{ textDecoration: "none", color: "purple" }}
                  to={`${url}/addAProduct`}
                >
                  Add A New Product
                </Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button>
                <AdminPanelSettingsIcon sx={{ mx: 1 }} />
                <Link
                  style={{ textDecoration: "none", color: "purple" }}
                  to={`${url}/makeAdmin`}
                >
                  Make Admin
                </Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button>
                <BreakfastDiningSharpIcon sx={{ mx: 1 }} />
                <Link
                  style={{ textDecoration: "none", color: "purple" }}
                  to={`${url}/manageProduct`}
                >
                  Manage Products
                </Link>
              </Button>
            </ListItem>
          </>
        )}
        <ListItem>
          <Button onClick={logOut}>
            <LogoutIcon sx={{ mx: 1 }} /> Log Out
          </Button>
        </ListItem>
        <ListItem>
          <Button>
            <img
              style={{ width: "40px", borderRadius: "50%", marginRight: "5px" }}
              src={user.photoURL}
              alt=" "
            />

            {user.displayName}
          </Button>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          {admin ? (
            <AdminRoute exact path={path}>
              <ManageAllOrder />
            </AdminRoute>
          ) : (
            <Route exact path={path}>
              <MyPurcessed />
            </Route>
          )}
          <Route path={`${path}/mypurcessed`}>
            <MyPurcessed />
          </Route>
          <Route path={`${path}/payment`}>
            <Payment />
          </Route>
          <AdminRoute path={`${path}/manageAllOrder`}>
            <ManageAllOrder />
          </AdminRoute>
          <Route path={`${path}/review`}>
            <ReviewPage />
          </Route>
          <AdminRoute path={`${path}/addAProduct`}>
            <AddANewProduct />
          </AdminRoute>
          <AdminRoute path={`${path}/manageProduct`}>
            <ManageProduct />
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

export default Dashboard;
