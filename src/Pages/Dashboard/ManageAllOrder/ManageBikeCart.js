import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ChangeStatusModal from "./ChangeStatusModal";
const ManageBikeCart = ({ bike, setBikes, bikes }) => {

const [openStutusModal, setOpenStatusModal] = React.useState(false);
const handleOpen = () => setOpenStatusModal(true);
const handleClose = () => setOpenStatusModal(false);

    const handelCancelOrder = (id) => {
      const confirm = window.confirm(
        `Are You Sure,  Want To  Cancel This Order`
      );
      if (confirm) {
        fetch(`http://localhost:5000/orderdBiek/${id}`, {
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
    
    


    

  const {
    BuyerName,
    Buyeremail,
    BiekName,
    Price,
    photo,

    status,
    Engine,
    _id,
  } = bike;
  return (
    <Grid item xs={12} lg={6}>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", textAlign: "left" }}>
          <Grid container>
            <Grid xs={12} item sm={5}>
              <img style={{ width: "100%" }} src={photo} alt=" " />
            </Grid>
            <Grid item xs={12} sm={7} sx={{ flex: "1 0 auto" }}>
              <Typography textAlign="left" component="div" variant="h6">
                {BiekName}
              </Typography>
              <Typography textAlign="left" component="div" variant="body">
                Buyer: {BuyerName}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                textAlign="left"
                component="div"
              >
                Email: {Buyeremail}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                textAlign="left"
                component="div"
              >
                Price: {Price}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                textAlign="left"
                component="div"
              >
                Engine: {Engine}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                textAlign="left"
                component="div"
              >
                Status:{" "}
                <span
                  style={{
                    backgroundColor: "cyan",
                    padding: "4px",
                    borderRadius: "5px",
                  }}
                >
                  {status}
                </span>
              </Typography>

              <Button
                sx={{ mx: 1, my: 1 }}
                variant="outlined"
                onClick={() => handelCancelOrder(_id)}
              >
                {" "}
                Cancel Order
              </Button>
              <Button
                onClick={() => handleOpen()}
                sx={{ mx: 1, my: 1 }}
                variant="contained"
              >
                Change Status
              </Button>
            </Grid>
          </Grid>
        </Box>
          </Card>
          
          <ChangeStatusModal
              openStutusModal={openStutusModal}
              setOpenStatusModal={setOpenStatusModal}
              handleClose={handleClose}
              handleOpen={handleOpen}
              bike={bike}
          
          
          >
              
</ChangeStatusModal>


    </Grid>
  );
};

export default ManageBikeCart;
