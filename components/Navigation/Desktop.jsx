import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import useHeader from "../../hooks/useHeader";

const pages = ["Men", "Women", "Exercise", "Accessories"];

const Desktop = () => {
  const { handleCloseNavMenu, handleOpenNavMenu } = useHeader();
  return (
    <>
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          //   flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Fitness Lab
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {page} <KeyboardArrowDown />
          </Button>
        ))}
      </Box>
    </>
  );
};

export default Desktop;
