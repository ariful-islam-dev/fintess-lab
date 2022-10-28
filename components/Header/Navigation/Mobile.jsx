import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Menu } from "@mui/material";
import React from "react";
import useHeader from "../../../hooks/useHeader";
import Dropdown from "./Dropdown";

const Mobile = () => {
  const { handleOpenNavMenu, anchorElNav, handleCloseNavMenu } = useHeader();
  const pages = ["Men", "Women", "Exercise", "Accessories"];
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
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
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <Dropdown key={page}>{page}</Dropdown>
          ))}
        </Menu>
      </Box>
    </>
  );
};

export default Mobile;
