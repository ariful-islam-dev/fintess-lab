import { Box, Container, Grid, Typography } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import client from "../../components/Apollo/client";
import { PRODUCTS_BY_CATEGORY } from "../../components/Apollo/query";
import Loading from "../../components/Loading";
import Cards from "../../components/Product/Cards";
import ProductPagination from "../../components/Product/Pagination";
import Sidebar from "../../components/Product/Sidebar";

function Products({ d }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [variable, setVariable] = useState({});

  const handlePage = (e, page) => {
    setPageNumber(page);
  };

  let { data, error, loading } = d;

  return (
    <div>
      <Container maxWidth="lg" sx={{ py: "50px" }}>
        <Head>
          <title>All Product || Fitness Lab</title>
        </Head>
        {/**************************** / All Cards Here Start *************************/}
        <Box>
          <Grid container spacing={2}>
            <Grid item lg={3}>
              <Sidebar />
            </Grid>
            <Grid item lg={9}>
              {loading && <Loading />}
              {error && <h2> {error.message}</h2>}
              {data?.products.data?.length > 0 ? (
                <>
                  <Cards data={data?.products?.data} />
                  {/**************************** / Pagination Start *************************/}
                  <ProductPagination
                    meta={data?.products?.meta}
                    handlePage={handlePage}
                  />
                  {/**************************** / Pagination End *************************/}
                </>
              ) : (
                <Typography variant="h2">There is No Data Here</Typography>
              )}
            </Grid>
          </Grid>
        </Box>
        {/**************************** / All Cards Here End *************************/}
      </Container>
    </div>
  );
}
export const getServerSideProps = async (ctx) => {
  const { type, name, pageNumber } = ctx.query;
 const pageNum = parseInt(pageNumber)
  const d = await client.query({
    query: PRODUCTS_BY_CATEGORY,
    variables: {
      Name: name,
      Type: type,
      // page: pageNum ? pageNum: 1
    },
  });

  return {
    props: {
      d,
    },
  };
};

export default Products;
