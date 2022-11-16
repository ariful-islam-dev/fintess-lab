import { styled } from "@mui/material/styles";
import React from "react";

import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

export default function Addresses() {
  const Item = styled(Box)(({ theme }) => ({
    textAlign: "left",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  }));

  return (
    <Item>
      <Stack sx={{ background: "#F9FAFB", padding: "24px", marginTop: "24px", borderRadius: "12px" }}>
        <Stack>
          <Typography variant="body2" color="error">
            Default
          </Typography>
          <Typography>Akib Ahmad</Typography>
          <Typography>01686027751</Typography>
          <Typography>Block-K, Plot-11 Rd No 17, Dhaka 1213</Typography>
          <Typography>Banani, Dhaka, Dhaka</Typography>
        </Stack>
        <Stack direction="row">
            <Button>Edit address</Button>
            <Button>Delete address</Button>
        </Stack>
      </Stack>
    </Item>
  );
}
