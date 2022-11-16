import { Box, Slider } from "@mui/material";
import { Card } from "../../Styles/Home";
import { SidebarTitle } from "../../Styles/Product";

const PriceRange = () => {
  return (
    <Card>
      <SidebarTitle variant="h3" component="h3">
        Price Range
      </SidebarTitle>
      <Box>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Box>
    </Card>
  );
};

export default PriceRange;
