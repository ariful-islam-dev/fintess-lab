import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Sidebar from "../sidebar";
import CustomizedTables from "./Table";
import Table from "./Table";

export default function MyOrder() {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Sidebar></Sidebar>
          </Grid>
          <Grid item xs={8}>
            <CustomizedTables></CustomizedTables>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
