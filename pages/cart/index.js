import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProductList from "../../components/Cart/ProductList";
import OrderSummary from "../../components/Checkout/OrderSummary";
import { getLocalStore } from "../../utils/storage";

export default function Cart() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const cart = getLocalStore("cart");
    setData(cart);
  }, []);
  return (
    <Box>
      <Head>
        <title>Cart || Fitness Lab</title>
      </Head>
      {data ? (
        <Container sx={{ py: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <ProductList data={data}></ProductList>
            </Grid>
            <Grid item xs={4}>
              <OrderSummary data={data}></OrderSummary>
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
