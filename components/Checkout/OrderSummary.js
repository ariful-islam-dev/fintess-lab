import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Box1, ButtonMaster, Heading3 } from "../Styles/reusable";

export default function OrderSummary() {
  return (
    <Box1>
      <Heading3 border variant="h3">
        Order summary
      </Heading3>

      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body2">Subtotal</Typography>
        <Typography variant="body1">$538.20</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body2">Shipping</Typography>
        <Heading3>$20</Heading3>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="body2">Total</Typography>
        <Typography variant="body1">$538.20</Typography>
      </Stack>
      <ButtonMaster fullWidth>Complete checkout</ButtonMaster>
    </Box1>
  );
}
