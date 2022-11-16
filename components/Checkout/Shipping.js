import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import * as React from "react";
import { Box1, Heading3 } from "../../components/Styles/reusable";

export default function Shipping() {
  return (
    <Box1>
      <Heading3 border>Shipping</Heading3>

      <Typography variant="subtitle1">Shipping address</Typography>
      <Typography variant="subtitle1">Akib Ahmad</Typography>
      <Typography variant="subtitle1">01763489672</Typography>
      <Typography variant="subtitle1">
        Block-K, Plot-11 Rd No 17, Dhaka 1213
      </Typography>
      <Typography>Banani, Dhaka, Dhaka</Typography>
      <Stack direction="row">
        <Button variant="text" sx={{ color: "#D23F57", textTransform: "none" }}>
          Change address
        </Button>
        <Button sx={{ color: "#374151", textTransform: "none" }} variant="text">
          Add new address
        </Button>
      </Stack>
    </Box1>
  );
}
