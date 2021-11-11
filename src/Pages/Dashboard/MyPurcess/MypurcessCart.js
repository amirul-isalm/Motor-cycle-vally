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

const MypurcessCart = ({ bike, setBikes, bikes }) => {
  const handelCancelOrder = (id) => {
    const confirm = window.confirm(`Are You Sure,  Want To  Cancel This Order`);
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
  
    BiekName,
    Price,
    photo,
  
    status,
    Engine,
    _id,
  } = bike;
  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", textAlign: "left", marginLeft: "5px" }}>
          <Grid container>
            <Grid item xs={12} sm={5}>
              <img style={{ width: "100%" }} src={photo} alt=" " />
            </Grid>

            <Grid item xs={12} sm={7} sx={{ flex: "1 0 auto" }}>
              <Typography textAlign="left" component="div" variant="h5">
                {BiekName}
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

              <Button onClick={() => handelCancelOrder(_id)}>
                {" "}
                Cancel Order
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Grid>
  );
};

export default MypurcessCart;
