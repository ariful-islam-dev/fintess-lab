import { TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

export default function AccountSecurity() {
  return (
    <Box sx={{ background: "#fff", padding: "24px", marginTop: "24px" }}>
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
        Account security
      </Typography>
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
    </Box>
  );
}
