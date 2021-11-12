import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import UpdateProductModal from "./UpdateProductModal";

const ManageProductCart = ({ cycle, setBikes, bikes, setSuccess }) => {
  const [updateModal, setUpdateModal] = React.useState(false);
  const handleOpen = () => setUpdateModal(true);
  const handleClose = () => setUpdateModal(false);
  const { photo, priec, engine, name, mileage, fuelTank, about, _id } = cycle;

  const clickDeleteButton = (id) => {
    const confirm = window.confirm(`Are You Sure,  Want To  Cancel This Order`);
    if (confirm) {
      fetch(`https://motorcycle-vally-000.herokuapp.com/bikeCollection/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Delete successfully");
            const remaing = bikes?.filter((bk) => bk._id !== id);
            setBikes(remaing);
          }
        });
    }
  };
  return (
    <Card sx={{ maxWidth: 345, mx: "auto", p: 1 }}>
      <CardMedia component="img" image={photo} alt="green iguana" />
      <CardContent style={{ textAlign: "left" }}>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={6}>
              Engine: {engine}
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              Mileage:{mileage}{" "}
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              Fuel-Tank:{fuelTank}
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              Price:{priec}
            </Grid>
            <Grid item xs={4} sm={8} md={12}>
              {about.slice(0, 135)}
            </Grid>
          </Grid>
        
      </CardContent>
      <CardActions>
        <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={6} md={6}>
            <Button
              onClick={() => handleOpen()}
              style={{ marginLeft: "8px" }}
              variant="outlined"
            >
              Update Price
            </Button>
          </Grid>
          <Grid item xs={6} md={6}>
            {" "}
            <Button
              onClick={() => clickDeleteButton(_id)}
              style={{ marginLeft: "8px" }}
              variant="contained"
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </CardActions>
      <UpdateProductModal
        openStutusModal={updateModal}
        setOpenStatusModal={setUpdateModal}
        handleClose={handleClose}
        handleOpen={handleOpen}
        bike={cycle}
        setSuccess={setSuccess}
      ></UpdateProductModal>
    </Card>
  );
};

export default ManageProductCart;
