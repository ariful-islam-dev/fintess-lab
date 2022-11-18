import { Box } from "@mui/material";
import { RiseLoader } from "react-spinners";

const Loading = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <RiseLoader color="#D23F57" />
    </Box>
  );
};

export default Loading;
