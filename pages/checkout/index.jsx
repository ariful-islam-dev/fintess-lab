import { Box, Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import OrderSummary from "../../components/Checkout/OrderSummary";
import Payment from "../../components/Checkout/Payment";
import Shipping from "../../components/Checkout/Shipping";
import useUser from "../../hooks/useUser";

export default function Checkout() {
  const router = useRouter();
  const { user } = useUser();
  if (!user) {
    router.push("/login");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ py: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Shipping></Shipping>
            <Payment></Payment>
          </Grid>
          <Grid item xs={4}>
            <OrderSummary></OrderSummary>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
