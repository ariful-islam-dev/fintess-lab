import { useState } from "react";
const useHeader = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const open = anchorElNav;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return {
    handleCloseNavMenu,
    handleCloseUserMenu,
    handleOpenNavMenu,
    handleOpenUserMenu,
    anchorElNav,
    anchorElUser,
    open,
  };
};

export default useHeader;
