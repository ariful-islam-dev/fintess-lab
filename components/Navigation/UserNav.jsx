import { ShoppingCart } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import useHeader from "../../hooks/useHeader";
import useModal from "../../hooks/useModal";
import ModalBox from "../ModalBox";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const UserNav = () => {
  const { handleOpenUserMenu, handleCloseUserMenu, anchorElUser } = useHeader();
  const { open, handleClickOpen, handleClose } = useModal();
  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          
          onClick={handleClickOpen}
        >
          <Badge badgeContent={17} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
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
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <ModalBox open={open} handleClose={handleClose} />
    </>
  );
};

export default UserNav;
