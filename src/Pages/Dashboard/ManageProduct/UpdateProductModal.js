import * as React from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { Typography, TextField } from "@mui/material";
// web.cjs is required for IE11 support

import { Button, Fade, Grid } from "@mui/material";

const UpdateProductModal = ({
  openStutusModal,
  handleClose,
  bike,
  setSuccess,
}) => {
  const [updateInfo, setUpdateInfo] = React.useState({ ...bike });

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

  const handelBlur = (e) => {
    updateInfo.priec = `${e.target.value} TK`
    setUpdateInfo(updateInfo);
  };
  // update price function
  const handelSubmit = (e) => {
    e.preventDefault();

    const confirm = window.confirm(`Are You Sure,  Want To  Update price?`);
    if (confirm) {
      fetch("https://motorcycle-vally-000.herokuapp.com/updatePrice", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            alert(`Price Update Successfully ${updateInfo.priec}`);
          } else {
            alert(`Hey! This Price Already ${updateInfo.priec}`);
          }
            setSuccess(true);
          handleClose();
        });
    }

    handleClose();
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
                  {bike.name}
                </Typography>
                <Typography variant="body" style={{ color: "black" }}>
                  Engine: {bike.engine}
                  <br />
                  Old Price: {bike.priec}
                </Typography>
              </Grid>
            </Grid>

            <Box>
              <form onSubmit={handelSubmit}>
                <TextField
                                  required
                                  type="number"
                  style={{
                    width: "100%",
                    marginTop: "15pX",
                  }}
                  label="Enter New Price"
                  onBlur={handelBlur}
                />

                <Button type="submit" sx={{ px: 4, mt: 2 }} variant="outlined">
                  Update Price
                </Button>
              </form>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default UpdateProductModal;
