import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useStoreState } from "easy-peasy";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import ProductList from "../../components/Cart/ProductList";
import OrderSummary from "../../components/Checkout/OrderSummary";

export default function Cart() {
  const {cart}=useStoreState(state=>state.cart)
 
  return (
    <Box>
      <Head>
        <title>Cart || Fitness Lab</title>
      </Head>
      {cart ? (
        <Container sx={{ py: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <ProductList data={cart}></ProductList>
            </Grid>
            <Grid item xs={4}>
              <OrderSummary data={cart}></OrderSummary>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Container maxWidth="lg">
          <h2>Sorry! Your have not Added any data your cart</h2>
          <Link href={"/products"} legacyBehavior>
            Add Cart Data
          </Link>
        </Container>
      )}
    </Box>
  );
}
