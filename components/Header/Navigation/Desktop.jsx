import { Box } from "@mui/material";
import React from "react";
import useHeader from "../../../hooks/useHeader";
import Dropdown from "./Dropdown";

const Desktop = () => {
  const { handleOpenNavMenu, open } = useHeader();
  const pages = ["Men", "Women", "Exercise", "Accessories"];
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {pages.map((page) => (
          <Dropdown key={page}>{page}</Dropdown>
        ))}
      </Box>
    </>
  );
};

export default Desktop;
