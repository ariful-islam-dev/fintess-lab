import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { ButtonMaster } from "../../components/Styles/Pages";

export default function OrderSummary() {
  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "left",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  }));

  return (
    <Item sx={{ padding: "24px" }}>
      <Typography
        color="primary"
        marginBottom
        sx={{
          paddingBottom: "10px",
          borderBottom: "1px solid #F3F4F6",
          fontFamily: "Barlow Condensed",
          fontWeight: "600",
        }}
        variant="h5"
      >
        Order summary
      </Typography>

      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body2">Subtotal</Typography>
        <Typography variant="body1">$538.20</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body2">Shipping</Typography>
        <Typography
          variant="body1"
          sx={{ paddingBottom: "10px", borderBottom: "1px solid #F3F4F6" }}
        >
          $20
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body2">Total</Typography>
        <Typography variant="body1">$538.20</Typography>
      </Stack>
      <ButtonMaster fullWidth>Complete checkout</ButtonMaster>
    </Item>
  );
}
