import { useQuery } from "@apollo/client";
import { Box, Container, Grid } from "@mui/material";
import { useState } from "react";
import Loading from "../../components/Loading";
import Cards from "../../components/Product/Cards";
import ProductPagination from "../../components/Product/Pagination";
import Sidebar from "../../components/Product/Sidebar";
import { GET_PRODUCT } from "../../utils/action";

function Products() {

  const [pageNumber, setPageNumber] = useState(1);
  const [variable, setVariable] = useState({});
  

  const handlePage = (e, page) => {
    setPageNumber(page);
  };
  const {data, loading, error} = useQuery(GET_PRODUCT, {
    variables: { page: pageNumber },
  });




  return (
    <div>
      <Container maxWidth="lg" sx={{ py: "50px" }}>
        {/**************************** / All Cards Here Start *************************/}
        <Box>
          <Grid container spacing={2}>
            <Grid item lg={3}>
              <Sidebar />
            </Grid>
            <Grid item lg={9}>
              {loading && <Loading />}
              {error && <h2> {error.message}</h2>}
              {data && (
                <>
                  <Cards data={data?.products?.data} />
                  {/**************************** / Pagination Start *************************/}
                  <ProductPagination
                    meta={data?.products?.meta}
                    handlePage={handlePage}
                  />
                  {/**************************** / Pagination End *************************/}
                </>
              )}
            </Grid>
          </Grid>
        </Box>
        {/**************************** / All Cards Here End *************************/}
      </Container>
    </div>
  );
}

export default Products;
