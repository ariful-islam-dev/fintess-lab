import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Shipping from "./Shipping";
import Payment from "./Payment";
import OrderSummary from "./OrderSummary";
import { Container } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function Checkout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ py: 4}}>
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
