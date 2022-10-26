import { Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import useHeader from "../../hooks/useHeader";
Menu;

const Dropdown = ({ categories }) => {
  const { anchorElUser, handleCloseUserMenu } = useHeader();
  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {categories.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseUserMenu}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default Dropdown;
