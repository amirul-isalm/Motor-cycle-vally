import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useHistory } from "react-router";

const SingleMotorCycle = ({ cycle }) => {

  const history = useHistory()
  

  const { photo, priec, engine, name, mileage, fuelTank, about,_id } = cycle;
  
  const clickPurcessButton = (id) => {
      history.push(`/purcess/${id}`);
    }

  return (
    <Card sx={{ maxWidth: 345, mx: "auto", p: 1 }}>
      <CardMedia component="img" image={photo} alt="green iguana" />
      <CardContent style={{ textAlign: "left" }}>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
            
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
        <Button onClick={()=>clickPurcessButton(_id)} style={{marginLeft:"8px"}} variant="outlined">
          Purcess
        </Button>
      </CardActions>
    </Card>
  );
};

export default SingleMotorCycle;
