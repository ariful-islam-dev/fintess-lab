
import { gql } from '@apollo/client';
import { Box, Container, Grid } from '@mui/material';
import client from '../../components/apollo/client';
import Cards from '../../components/Product/Cards';
import ProductPagination from '../../components/Product/Pagination';
import Sidebar from '../../components/Product/Sidebar';

 function Products({ data }) {

  
  return (
    <div>
        <Container maxWidth="lg" sx={{py:"50px"}}>
          {/**************************** / All Cards Here Start *************************/}
          <Box>
            <Grid container spacing={2} >
              <Grid items lg={3}>
                <Sidebar/>
              </Grid>
              <Grid items lg={9}>
                <Cards data={data.products.data}/>
                {/**************************** / Pagination Start *************************/}
                <ProductPagination/>
                {/**************************** / Pagination End *************************/}
              </Grid>
            </Grid>
             
          </Box>
          {/**************************** / All Cards Here End *************************/}
         
          
        </Container>
    </div>
  );
}






export const getStaticProps= async()=> { 
  //  const {category}= useStoreState(state=>state)
  const { data } = await client.query({ 
    query: gql`
      query getProducts  {
        products(sort: "id:desc"){
          data{
            id,
            attributes{
              title, 
              price,
              discount_price,
             
             thumbnails{
              data{
                id,
                attributes{
                  url
                }
              }
             }
            }
          },
          meta{
            pagination{
              page,pageSize,pageCount,total

            }
          }
        }
      }
    `,
  });


  // const {data, error, loading } =  useQuery(GET_PRODUCT);
  // if(loading) return loading
  // if(error) return error.message

  return {
    props: { data },
  };
};

 

export default Products;

