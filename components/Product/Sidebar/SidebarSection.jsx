import { Box } from "@mui/material";
import React from "react";
import { SidebarTitle } from "../../Styles/Product";

const SidebarSection = ({ title, data }) => {
  return (
    <Box sx={{ my: "20px" }}>
      <SidebarTitle variant="h3" component="h3">
        {title}
      </SidebarTitle>
    </Box>
  );
};

export default SidebarSection;
