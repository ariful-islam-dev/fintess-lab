
import { useQuery } from "@apollo/client";
import { Box, Container } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { GET_PRODUCT_BY_ID } from "../../components/Apollo/query";
import NavLoading from "../../components/Loading/navLoading";
import ProductsDetails from "../../components/ProductDetails";


   
      
function Product() {
  const router = useRouter();
  const pId = router?.query?.pId;


  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID,{
    variables: {pId: pId} ,
  });
  if(loading) return <Box sx={{display:'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
    
    <Head>Product Details || Fitness Lab</Head>
    <NavLoading/></Box>
  if(error) return <h1>{error.message}</h1>
  

	return (
	<Container mexWidth="lg">
    <Head>Product Details || Fitness Lab</Head>
    <ProductsDetails data={data?.product?.data}/>
  </Container>
	);
};


/* 

########################################################
########################################################
*/

// pages/posts/[id].js






export default Product;

