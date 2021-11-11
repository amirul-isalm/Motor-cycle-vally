import * as React from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Typography from "@mui/material/Typography";
// web.cjs is required for IE11 support

import { Fade } from "@mui/material";

const ChangeStatusModal = ({openStutusModal,handleClose,bike}) => {
     

    const changeStatus = (statusName) => {
    
fetch(``)


}










const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
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
              <Typography id="spring-modal-title" variant="h6" component="h2">
               {bike.BiekName}
              </Typography>
              <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
};

export default ChangeStatusModal;
