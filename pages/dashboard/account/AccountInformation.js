import { FileUpload } from "@mui/icons-material";
import { Box, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function AccountInformation() {
  return (
    <Box sx={{ background: "#fff", padding: "24px", marginBottom: "24px" }}>
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
        Account information
      </Typography>
      <Stack rowGap={3}>
        <Stack direction="row" spacing={3}>
          <FileUpload></FileUpload>
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
            label="First name"
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
            label="Last name"
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
            label="Phone number"
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
            label="Gender"
            variant="outlined"
          />
        </Stack>
      </Stack>
    </Box>
  );
}
