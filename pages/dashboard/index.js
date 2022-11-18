import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import Sidebar from "../../components/Dashboard/sidebar";
import UserAccount from "./account";

import { signIn, signOut, useSession } from "next-auth/react";


export default function Dashboard() {
  console.log(useSession(), signIn, signOut)
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Sidebar></Sidebar>
          </Grid>
          <Grid item xs={8}>
            <UserAccount></UserAccount>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
