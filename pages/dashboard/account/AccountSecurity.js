import { TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { Box1, Heading3 } from "../../../components/Styles/reusable";

export default function AccountSecurity() {
  return (
    <Box1 sx={{mt: 2}}>
      <Heading3 border
      >
        Account security
      </Heading3>
      <Stack rowGap={3}>
        <Stack direction="row" spacing={3}>
          <TextField
            sx={{
              width: "50%",
              background: "#fff",
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
            }}
            id="outlined-basic"
            label="Email"
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
            label="Password"
            variant="outlined"
          />
        </Stack>
      </Stack>
    </Box1>
  );
}
