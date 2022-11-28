import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import React from "react";
import { GET_MATERIALS } from "../../Apollo/query";
import NavLoading from "../../Loading/navLoading";
import { Card } from "../../Styles/Home";
import { SidebarTitle } from "../../Styles/Product";
import SidebarItems from "./SidebarItems";

const Materials = () => {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   axios("https://fitness-gym82.herokuapp.com/api/metarials")
  //     .then((data) => setData(data.data))
  //     .catch((err) => setError(error));
  // }, [data, error]);
  const { loading, data, error } = useQuery(GET_MATERIALS);
  return (
    <Card>
      <Box sx={{ my: "20px" }}>
        <SidebarTitle variant="h3" component="h3">
          Materials
        </SidebarTitle>
        <hr />
        {!data && !error && <NavLoading />}
        {error && <h5>{error.message}</h5>}
        {data && <SidebarItems data={data?.metarials.data} />}
      </Box>
    </Card>
  );
};

export default Materials;
