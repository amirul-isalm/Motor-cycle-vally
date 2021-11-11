import * as React from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Typography from "@mui/material/Typography";
// web.cjs is required for IE11 support

import { Button, Fade, Grid } from "@mui/material";

const ChangeStatusModal = ({ openStutusModal, handleClose, bike }) => {


    // change status function 
  const changeStatus = (statusName) => {
    bike.status = statusName;

     const confirm = window.confirm(
       `Are You Sure,  Want To  ${statusName} This Order`
     );
      if (confirm) {
          
    fetch("http://localhost:5000/orderbike", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bike),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert(`Order Successfully ${statusName}`);
        } else {
          alert(`Hey! This Order Already ${statusName}`);
        }
        handleClose();
      });
      }
  };

    
    // modal body 
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "background.paper",

    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={openStutusModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openStutusModal}>
          <Box sx={style}>
            <Grid container spacing={2} columns={18}>
              <Grid item xs={18}>
                <img style={{ width: "90%" }} src={bike.photo} alt=" " />
              </Grid>
              <Grid item xs={18}>
                <Typography variant="h6" style={{ color: "black" }}>
                  {bike.BiekName}
                </Typography>
                <Typography variant="body" style={{ color: "black" }}>
                  Buyer: {bike.BuyerName}
                </Typography>
                <Typography variant="body" style={{ color: "black" }}>
                  Change Booking Status:
                </Typography>
              </Grid>

              <Grid item xs={9} md={6}>
                <Button
                  variant="contained"
                  onClick={() => changeStatus("Shipped")}
                >
                  Shipped
                </Button>
              </Grid>

              <Grid item xs={9} md={6}>
                <Button
                  variant="contained"
                  onClick={() => changeStatus("Pending")}
                >
                  Pending
                </Button>
              </Grid>
              <Grid item xs={9} md={6}>
                <Button
                  variant="contained"
                  onClick={() => changeStatus("Rejected")}
                >
                  Rejected
                </Button>
              </Grid>
              <Grid item xs={9} md={6}>
                <Button
                  variant="contained"
                  onClick={() => changeStatus("Processing")}
                >
                  Processing
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ChangeStatusModal;
