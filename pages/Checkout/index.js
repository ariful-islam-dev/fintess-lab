
import { Box, Container, Grid } from "@mui/material";
import OrderSummary from "../../components/Checkout/OrderSummary";
import Payment from "../../components/Checkout/Payment";
import Shipping from "../../components/Checkout/Shipping";

export default function Checkout() {
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
