import { Stack, Typography } from "@mui/material";
import React from "react";

const Logo = ({ display }) => {
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: display,
          fontFamily: "Montserrat",
          flexGrow: { xs: "2", md: "0" },
          fontWeight: 700,

          color: "inherit",
          textDecoration: "none",
        }}
      >
        FITNESS <Stack sx={{ color: "#D23F57", ml: "4px" }}> LAB</Stack>
      </Typography>
    </>
  );
};

export default Logo;
