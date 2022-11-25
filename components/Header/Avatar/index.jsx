import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useStoreActions } from "easy-peasy";
import { useRouter } from "next/router";
import React from "react";
import useHeader from "../../../hooks/useHeader";

const AvatarIcon = ({ user }) => {
  const { handleCloseUserMenu, handleOpenUserMenu, anchorElUser } = useHeader();
  const settings = [
    {
      name: "Profile",
      path: "/dashboard",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Logout",
      path: "/",
    },
  ];

  const router = useRouter();
  const { authLogout } = useStoreActions((action) => action.auth);
  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title={user?.username}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              alt={user?.username}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzcsSpJbl4Iokc_4n3EISbGE3hiRVcRkfLw&usqp=CAU"
            />
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
              <Typography
                textAlign="center"
                onClick={
                  setting.name === "Logout"
                    ? () => authLogout()
                    : () => router.push(`${setting.path}`)
                }
              >
                {setting.name}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};

export default AvatarIcon;
