import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import AvatarIcon from "./Avatar";
import CardHeader from "./Card";
import Logo from "./Logo";
import Desktop from "./Navigation/Desktop";
import Mobile from "./Navigation/Mobile";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <AppBar position="static" color={"inherit"}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Mobile Menu */}
          <>
            <Logo display={{ xs: "none", md: "flex" }} />
            <Mobile />
          </>

          {/* Desktop Menu */}
          <>
            <Logo display={{ xs: "flex", md: "none" }} />
            <Desktop />
          </>
          <SearchBar in />
          <CardHeader />
          <AvatarIcon />
        </Toolbar>
        <SearchBar out />
      </Container>
    </AppBar>
  );
}
export default Header;
