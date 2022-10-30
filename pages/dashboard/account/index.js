import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Sidebar from "../sidebar";
import AccountSecurity from "./AccountSecurity";
import AccountInformation from "./AccountInformation";

export default function Account() {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Sidebar></Sidebar>
          </Grid>
          <Grid item xs={8}>
            <AccountInformation></AccountInformation>
            <AccountSecurity></AccountSecurity>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
