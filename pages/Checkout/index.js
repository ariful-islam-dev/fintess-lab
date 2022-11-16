import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Shipping from "./Shipping";
import Payment from "./Payment";
import OrderSummary from "./OrderSummary";
import { Container } from "@mui/system";

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
