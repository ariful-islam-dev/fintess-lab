import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import React from "react";
import { GET_WARRANTY } from "../../Apollo/query";
import NavLoading from "../../Loading/navLoading";
import { Card } from "../../Styles/Home";
import { SidebarTitle } from "../../Styles/Product";
import SidebarItems from "./SidebarItems";

const Warranties = () => {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("https://fitness-gym82.herokuapp.com/api/warranties")
  //     .then((d) => setData(d.data))
  //     .catch((err) => setError(err));
  // }, [data]);
  const { loading, data, error } = useQuery(GET_WARRANTY);

  return (
    <Card>
      <Box sx={{ my: "20px" }}>
        <SidebarTitle variant="h3" component="h3">
          Warranty Period
        </SidebarTitle>
        <hr />
        {loading && <NavLoading />}
        {error && <h5>{error.message}</h5>}
        {data && <SidebarItems data={data?.warranties?.data} />}
      </Box>
    </Card>
  );
};

export default Warranties;
