import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import Head from "next/head";
import React from "react";
import ProductList from "../../components/Cart/ProductList";
import OrderSummary from "../../components/Checkout/OrderSummary";

export default function Cart() {
  return (
    <Box>
      <Head>
        <title>Cart || Fitness Lab</title>
      </Head>
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
