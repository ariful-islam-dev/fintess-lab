import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import React from "react";
import { GET_BRAND } from "../../Apollo/query";
import NavLoading from "../../Loading/navLoading";
import { Card } from "../../Styles/Home";
import { SidebarTitle } from "../../Styles/Product";
import SidebarItems from "./SidebarItems";

const Brands = () => {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   axios
  //     .get("https://fitness-gym82.herokuapp.com/api/brands")
  //     .then((data) => setData(data.data))
  //     .catch((err) => setError(err));
  // }, [data, error]);
  const { data, loading, error } = useQuery(GET_BRAND);
  return (
    <Card>
      <Box sx={{ my: "20px" }}>
        <SidebarTitle variant="h3" component="h3">
          Brands
        </SidebarTitle>
        <hr />
        {loading && <NavLoading />}
        {error && <h5>{error.message}</h5>}
        {data && <SidebarItems data={data?.brands?.data} />}
      </Box>
    </Card>
  );
};

export default Brands;
