import { Grid, Stack } from "@mui/material";
import { Box, Container } from "@mui/system";

import Sidebar from "../../../components/Dashboard/sidebar";
import { Heading3 } from "../../../components/Styles/reusable";
import Addresses from "./Addresses";

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
              <Heading3 border>Manage address</Heading3>
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
