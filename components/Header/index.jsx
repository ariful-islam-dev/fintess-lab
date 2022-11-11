import { gql, useQuery } from "@apollo/client";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { useStoreActions } from "easy-peasy";
import * as React from "react";
import { useState } from "react";
import { ButtonMaster } from "../Styles/reusable";
import AvatarIcon from "./Avatar";
import CardHeader from "./Card";
import Logo from "./Logo";
import Desktop from "./Navigation/Desktop";
import Mobile from "./Navigation/Mobile";
import SearchBar from "./SearchBar";

function Header() {
  const addMenu = useStoreActions((state) => state.menu.addMenu);
  const [user, setUser] = useState({});

  const GET_CATEGORY = gql`
    query getCategories {
      categories(pagination: { page: 1, pageSize: 40 }) {
        data {
          id
          attributes {
            Name
            Type
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_CATEGORY);
  if (data) {
    addMenu(data.categories.data);
  }
  React.useEffect(() => {
    const user = localStorage.getItem("user");
    const newUser = JSON.parse(user);
    setUser(newUser);
  }, []);

  return (
    <AppBar position="static" color={"inherit"}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Mobile Menu */}

          <Logo display={{ xs: "none", md: "flex" }} />
          {loading && <h1>Loading</h1>}
          {error && <h1>error {error.message}</h1>}
          {data && <Mobile />}
          {/* Desktop Menu */}

          <Logo display={{ xs: "flex", md: "none" }} />
          {loading && <h1>Loading</h1>}
          {error && <h1>error {error.message}</h1>}
          {data && <Desktop />}
          <SearchBar in />
          <CardHeader />
          {user ? (
            <AvatarIcon user={user} />
          ) : (
            <ButtonMaster
              btn="secondary"
              component="a"
              href="/login"
              sx={{ padding: 1, fontSize: "14px" }}
            >
              Login
            </ButtonMaster>
          )}
        </Toolbar>
        <SearchBar out />
      </Container>
    </AppBar>
  );
}
export default Header;
