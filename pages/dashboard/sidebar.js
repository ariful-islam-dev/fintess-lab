import { Box, Grid, List } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptIcon from "@mui/icons-material/Receipt";
import RoomIcon from "@mui/icons-material/Room";

export default function Sidebar() {
  return (
    <Grid
      item
      xs={4}
      sx={{ background: "#fff", padding: "24px", marginBottom: "24px" }}
    >
      <List>
        <PersonIcon fontSize="20px" /> Account information
      </List>
      <List>
        <ReceiptIcon fontSize="20px" /> My order
      </List>
      <List>
        <RoomIcon fontSize="20px" /> Manage order
      </List>
    </Grid>
  );
}
