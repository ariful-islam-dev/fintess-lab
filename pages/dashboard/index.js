import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import AccountSecurity from '../../components/Dashboard/AccountSecurity';
import Sidebar from "../../components/Dashboard/sidebar";

import { useRouter } from "next/router";
import AccountInformation from '../../components/Dashboard/AccountInformation';
import useUser from "../../hooks/useUser";


export default function Dashboard() {
 
 
  const router = useRouter();
  const { user } = useUser();
  if (!user) {
    router.push("/login");
  }
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
