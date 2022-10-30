import { Grid, Stack } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Sidebar from "../sidebar";
import Addresses from "./Addresses";
import { Typography } from "@mui/material";

export default function Address() {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Sidebar></Sidebar>
          </Grid>
          <Grid item xs={8}>
            <Stack sx={{ padding: "24px", background: "#fff" }}>
              <Typography
                color="primary"
                marginBottom
                sx={{
                  paddingBottom: "10px",
                  borderBottom: "1px solid #F3F4F6",
                  fontFamily: "Barlow Condensed",
                  fontWeight: "600",
                }}
                variant="h5"
              >
                Manage address
              </Typography>
              <Addresses></Addresses>
              <Addresses></Addresses>
              <Addresses></Addresses>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
