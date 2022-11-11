import { Box, TextField } from "@mui/material";
import { SidebarTitle } from "../../Styles/Product";

const PriceRange = () => {
  return (
    <div>
      <SidebarTitle variant="h3" component="h3">
        Price Range
      </SidebarTitle>
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          label="Minimum Price"
          placeholder="Placeholder"
          type="number"
        />
        <TextField
          label="Maximum Price"
          placeholder="Placeholder"
          type="number"
        />
      </Box>
    </div>
  );
};

export default PriceRange;
