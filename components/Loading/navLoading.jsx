import { Box } from "@mui/material";
import React from "react";
import { ScaleLoader } from "react-spinners";
const NavLoading = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ScaleLoader color="#d78c36" />
    </Box>
  );
};

export default NavLoading;
