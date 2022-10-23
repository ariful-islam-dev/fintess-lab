import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import Desktop from "../Navigation/Desktop";
import Mobile from "../Navigation/Mobile";
import UserNav from "../Navigation/UserNav";
import SearchBar from "../Serach";

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Mobile Menu */}
          <Mobile />
          {/* Desktop menu */}
          <Desktop />
          {/* Searchbar */}
          <SearchBar />

          {/* User Menu */}
          <UserNav />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
