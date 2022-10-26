import { useState } from "react";

const useHeader = () => {
  const [anchorElNav, setAnchorElNav] = useState("" || null);
  const [anchorElUser, setAnchorElUser] = useState("" || null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    console.log(event);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.target.value);
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
  };
};

export default useHeader;
