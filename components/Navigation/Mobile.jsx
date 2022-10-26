import { KeyboardArrowDown } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import useHeader from "../../hooks/useHeader";
import Logo from "../Logo";

const pages = ["Men", "Women", "Exercise", "Accessories"];

const Mobile = () => {
  const { handleCloseNavMenu, handleOpenNavMenu, anchorElNav } = useHeader();
  return (
    <>
      <Logo style={{ xs: "none", md: "flex" }} />

      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
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
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>{" "}
              <KeyboardArrowDown />
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};

export default Mobile;
