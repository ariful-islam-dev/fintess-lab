import { useQuery } from "@apollo/client";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useRouter } from "next/router";

import { useState } from "react";
import { GET_CATEGORY } from "../Apollo/query";
import NavLoading from "../Loading/navLoading";
import { ButtonMaster } from "../Styles/reusable";
import AvatarIcon from "./Avatar";
import CardHeader from "./Card";
import Logo from "./Logo";
import Desktop from "./Navigation/Desktop";
import Mobile from "./Navigation/Mobile";
import SearchBar from "./SearchBar";

function Header({ categories }) {
  // const [data, setData] = useState(null);

  const {
    menu: { addMenu },
    auth: { authStore },
  } = useStoreActions((state) => state);
  const auth = useStoreState((state) => state.auth.auth);
  const [user, setUser] = useState({});
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_CATEGORY);
  if (data) {
    addMenu(data?.categories?.data);
  }

  // useEffect(() => {
  //   axios
  //     .get("https://fitness-gym82.herokuapp.com/api/categories")
  //     .then((data) => {
  //       setData(data.data);
  //     });
  //   const user = getLocalStore("user");
  //   if (user && !auth.user) {
  //     authStore(user);
  //   }
  //   setUser(auth);
  // }, [auth, authStore]);
  return (
    <AppBar position="static" color={"inherit"}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Mobile Menu */}

          <Logo display={{ xs: "none", md: "flex" }} />
          {loading && <NavLoading />}
          {error && <h4>error {error.message}</h4>}
          {data && <Mobile />}
          {/* Desktop Menu */}

          <Logo display={{ xs: "flex", md: "none" }} />
          {loading && <NavLoading />}
          {error && <h4>error {error.message}</h4>}
          {data && <Desktop />}
          <SearchBar in />
          <CardHeader />
          {user.user ? (
            <AvatarIcon user={user?.user} />
          ) : (
            <ButtonMaster
              onClick={() => router.push("/login")}
              btn="secondary"
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

// export const getServerSideProps = async () => {
//   const { data } = await client.query({
//     query: GET_CATEGORY,
//   });
//   console.log(data);

//   return {
//     props: {
//       categories: data,
//     },
//   };
// };

export default Header;
