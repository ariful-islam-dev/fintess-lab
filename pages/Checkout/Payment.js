import React from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";

export default function Payment() {
  const Item = styled(Box)(({ theme }) => ({
    textAlign: "left",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    marginTop: "20px",
  }));
  return (
    <Item sx={{ padding: "24px" }}>
      <Typography
        marginBottom
        sx={{ paddingBottom: "10px", borderBottom: "1px solid #F3F4F6" }}
        variant="h5"
      >
        Payment method
      </Typography>
      <Stack direction="row" spacing={3}>
        <FormControl
          sx={{
            width: "50%",
            backgroundColor: "#F3F4F6",
            padding: "12px",
            borderRadius: "8px",
          }}
        >
          <FormControlLabel
            value="card"
            control={<Radio />}
            label="Credit/Debit card"
          />
        </FormControl>
        <FormControl
          sx={{
            width: "50%",
            backgroundColor: "#F3F4F6",
            padding: "12px",
            borderRadius: "8px",
          }}
        >
          <FormControlLabel
            value="cash"
            control={<Radio />}
            label="Cash on delivery"
          />
        </FormControl>
      </Stack>
      <Stack
        spacing={3}
        sx={{
          marginTop: "24px",
          padding: "24px",
          backgroundColor: "#F9FAFB",
          borderRadius: "10px",
        }}
      >
        <Stack direction="row">
          <TextField
            sx={{
              width: "100%",
              background: "#fff",
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
            }}
            id="outlined-basic"
            label="Card number"
            variant="outlined"
          />
        </Stack>
        <Stack direction="row" spacing={3}>
          <TextField
            sx={{
              width: "50%",
              background: "#fff",
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
            }}
            id="outlined-basic"
            label="CVC/CVV"
            variant="outlined"
          />
          <TextField
            sx={{
              width: "50%",
              background: "#fff",
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
            }}
            id="outlined-basic"
            label="Expiry date"
            variant="outlined"
          />
        </Stack>
      </Stack>
    </Item>
  );
}
