import { Box, Grid, List } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import Sidebar from "./sidebar";
import Account from "./account";

export default function Dashboard() {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Sidebar></Sidebar>
          </Grid>
          <Grid item xs={8}>
            <Account></Account>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}