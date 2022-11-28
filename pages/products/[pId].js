
import { Box, Container } from "@mui/material";
import Head from "next/head";
import client from "../../components/Apollo/client";
import { GET_PRODUCT_BY_ID } from "../../components/Apollo/query";
import NavLoading from "../../components/Loading/navLoading";
import ProductsDetails from "../../components/ProductDetails";


   
      
function Product({product}) {
  const {data, error, loading}=product;


  if(loading) return <Box sx={{display:'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
    
    <Head><title>Product Details || Fitness Lab</title></Head>
    <NavLoading/></Box>
  if(error) return <h1>{error.message}</h1>
  

	return (
	<Container mexWidth="lg">
    <Head>
      <title>Product Details || Fitness Lab</title>
    </Head>
    <ProductsDetails data={data?.product?.data}/>
  </Container>
	);
};


/* 

########################################################
########################################################
*/


export const getServerSideProps = async (ctx)=>{

  const pId = ctx.params.pId
  const data = await client.query({
    query: GET_PRODUCT_BY_ID,
    variables:{
      pId: pId
    }
  })



  return {
    props: {
      product: data
    }
  }
}






export default Product;

