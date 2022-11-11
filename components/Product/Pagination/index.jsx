import { Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as React from "react";

export default function ProductPagination() {
  const handlePaginationChange = (e, page) => {
    console.log(e.target.value);
    console.log(page);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Stack spacing={5}>
        <Pagination
          onChange={handlePaginationChange}
          count={5}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </Box>
  );
}
