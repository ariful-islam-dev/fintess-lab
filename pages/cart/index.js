import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import OrderSummary from "../checkout/OrderSummary";
import ProductList from "./ProductList";

export default function Cart() {
  return (
    <Box>
      <Container sx={{ py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <ProductList></ProductList>
          </Grid>
          <Grid item xs={4}>
            <OrderSummary></OrderSummary>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
