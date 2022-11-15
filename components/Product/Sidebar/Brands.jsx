import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import React from "react";
import { GET_BRANDS } from "../../../utils/action";
import NavLoading from "../../Loading/navLoading";
import { Card } from "../../Styles/Home";
import { SidebarTitle } from "../../Styles/Product";
import SidebarItems from "./SidebarItems";

const Brands = () => {
  const { data, loading, error } = useQuery(GET_BRANDS);
  return (
    <Card>
      <Box sx={{ my: "20px" }}>
        <SidebarTitle variant="h3" component="h3">
          Brands
        </SidebarTitle>
        <hr />
        {loading && <NavLoading />}
        {error && <h5>{error.message}</h5>}
        {data && <SidebarItems data={data?.brands.data} />}
      </Box>
    </Card>
  );
};

export default Brands;
