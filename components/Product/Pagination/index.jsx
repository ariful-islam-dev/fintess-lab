import { Box, Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import * as React from "react";

export default function ProductPagination({ meta, handlePage }) {
  // console.log(meta.pagination.pageCount);
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
      <Stack spacing={5}>
        <Pagination
          onChange={handlePage}
          count={meta?.pagination?.pageCount}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </Stack>
    </Box>
  );
}
