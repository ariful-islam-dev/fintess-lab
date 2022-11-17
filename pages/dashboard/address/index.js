import { Grid, Stack } from "@mui/material";
import { Box, Container } from "@mui/system";

import Addresses from "../../../components/Dashboard/Addresses";
import Sidebar from "../../../components/Dashboard/sidebar";
import { Heading3 } from "../../../components/Styles/reusable";

export default function UserAddress() {
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
              <Addresses/>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
