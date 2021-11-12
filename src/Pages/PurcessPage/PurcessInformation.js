import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useAuth from "../Context/useAuth";

const PurcessInformation = ({ cycle }) => {
  const { user } = useAuth();
  const { priec, name, photo, engine } = cycle;

  const [buyerInformation, setBuyerInformation] = React.useState({});

  const handelBlure = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const newInformaiton = {
      ...buyerInformation,
      BuyerName: user.displayName,
      Buyeremail: user.email,
      BiekName: name,
      Price: priec,
      photo: photo,
      status: "Pending",
      Engine: engine,
    };
    newInformaiton[inputName] = inputValue;
    setBuyerInformation(newInformaiton);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(buyerInformation);
    // send buyer  data in database

    fetch("https://motorcycle-vally-000.herokuapp.com/orderdBiek", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(buyerInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("purcess successfully");
          e.target.reset();
        }
      });
  };
  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <form onSubmit={handelSubmit}>
        <TextField
          style={{ width: "95%" }}
          label="Your Name"
          type="text"
          value={user?.displayName || ""}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          style={{ width: "95%" }}
          label="Your Email"
          type="email"
          value={user?.email || ""}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          required
          style={{ width: "95%" }}
          label="Your Mobile Number"
          type="Number"
          name="PhoneNumber"
          onBlur={handelBlure}
        />
        <TextField
          required
          style={{ width: "95%" }}
          label="Your Address"
          type="text"
          name="address"
          onBlur={handelBlure}
        />

        <TextField
          style={{ width: "95%" }}
          value={name || ""}
          label="Bike Name"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          style={{ width: "95%" }}
          value={priec || ""}
          InputProps={{
            readOnly: true,
          }}
          label="Bike Price"
        />
        <Button type="submit" variant="outlined">
          <ShoppingCartIcon /> Confirm Purcess{" "}
        </Button>
      </form>
    </Box>
  );
};

export default PurcessInformation;
