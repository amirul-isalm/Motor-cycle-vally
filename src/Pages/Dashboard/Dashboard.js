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
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
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
const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button>
          <HomeSharpIcon sx={{ mx: 2 }} />
          <Link style={{ textDecoration: "none", color: "purple" }} to="/">
            {"  "} Home
          </Link>
        </ListItem>
        <ListItem button>
          <TwoWheelerIcon sx={{ mx: 2 }} />
          <Link
            style={{ textDecoration: "none", color: "purple" }}
            to="/explore"
          >
            {"  "} Explore
          </Link>
        </ListItem>
        <ListItem button>
          <PaymentsIcon sx={{ mx: 2 }} />
          <Link
            style={{ textDecoration: "none", color: "purple" }}
            to={`${url}/payment`}
          >
            Payment
          </Link>
        </ListItem>
        <ListItem button>
          <ShoppingCartIcon sx={{ mx: 2 }} />
          <Link
            style={{ textDecoration: "none", color: "purple" }}
            to={`${url}/mypurcessed`}
          >
            {"  "} My Purcessed
          </Link>
        </ListItem>
        <ListItem button>
          <RateReviewIcon sx={{ mx: 2 }} />
          <Link
            style={{ textDecoration: "none", color: "purple" }}
            to={`${url}/review`}
          >
            {"  "} Review
          </Link>
        </ListItem>
        <ListItem button>
          <BallotIcon sx={{ mx: 2 }} />
          <Link
            style={{ textDecoration: "none", color: "purple" }}
            to={`${url}/manageAllOrder`}
          >
            {"  "} Manage All Orders
          </Link>
        </ListItem>
        <ListItem button>
          <AddBoxIcon sx={{ mx: 2 }} />
          <Link
            style={{ textDecoration: "none", color: "purple" }}
            to={`${url}/addAProduct`}
          >
            {"  "} Add A New Product
          </Link>
        </ListItem>
        <ListItem button>
          <AdminPanelSettingsIcon sx={{ mx: 2 }} />
          <Link
            style={{ textDecoration: "none", color: "purple" }}
            to="/explore"
          >
            {"  "} Make Admin
          </Link>
        </ListItem>
        <ListItem button>
          <BreakfastDiningSharpIcon sx={{ mx: 2 }} />
          <Link
            style={{ textDecoration: "none", color: "purple" }}
            to="/explore"
          >
            {"  "} Manage Products
          </Link>
        </ListItem>
        <ListItem button>
          <LogoutIcon sx={{ mx: 2 }} />
          <Link
            style={{ textDecoration: "none", color: "purple" }}
            to="/explore"
          >
            {"  "} Log Out
          </Link>
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
            Dashboard{" "}
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
          <Route exact path={path}>
            <MyPurcessed />
          </Route>

          <Route path={`${path}/mypurcessed`}>
            <MyPurcessed />
          </Route>
          <Route path={`${path}/payment`}>
            <Payment />
          </Route>
          <Route path={`${path}/manageAllOrder`}>
            <ManageAllOrder />
          </Route>
          <Route path={`${path}/review`}>
            <ReviewPage />
          </Route>
          <Route path={`${path}/addAProduct`}>
            <AddANewProduct />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

export default Dashboard;
