import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import useHeader from "../../hooks/useHeader";

const pages = ["Men", "Women", "Exercise", "Accessories"];
const categories = ["Compress Gear", "Home", "Albow Support"];

const Desktop = () => {
  const [cat, setCat] = useState("");
  const { handleOpenNavMenu, anchorElNav, handleCloseNavMenu } = useHeader();
  const handleCategory = (item) => {
    setCat(item);
  };
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      <Button onClick={handleOpenNavMenu}>Men</Button>
      <Button onClick={handleOpenNavMenu}>Women</Button>
      <Button onClick={handleOpenNavMenu}>Exercise</Button>
      <Button onClick={handleOpenNavMenu}>Accessories</Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={anchorElNav}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "block" },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Desktop;
