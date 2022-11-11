import { Box } from "@mui/material";
import { useStoreState } from "easy-peasy";
import React from "react";
import Dropdown from "./Dropdown";

const Desktop = () => {
  const storeMenu = useStoreState((state) => state.menu.menu);

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
        {Object.keys(storeMenu)?.map((page) => (
          <Dropdown key={page}>{page}</Dropdown>
        ))}
      </Box>
    </>
  );
};

export default Desktop;
