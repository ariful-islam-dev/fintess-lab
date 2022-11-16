
import { gql, useQuery } from "@apollo/client";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";
import NavLoading from "../../components/Loading/navLoading";
import ProductsDetails from "../../components/ProductDetails";

const GET_PRODUCT_BY_ID = gql`
        query getProductById($pId: ID!){
          product(id: $pId){
              data{
                  id,
                  attributes{
                    title,
                    price,
                    discount_price,
                    description,
                    stock,
                    thumbnails{
                      data{ 
                        id,
                        attributes{
                          url
                        }
                      }
                    },
                    categories{
                      data{
                       attributes{
                         Type,
                        Name
                      }
                      }
                    },
                    brand{
                      data{
                        attributes{
                          name
                        }
                      }
                    },
                    warranty{
                      data{
                        attributes{
                          period
                        }
                      }
                    },
                    metarial{
                      data{
                        attributes{name}
                      }
                    },
                    colors{
                      data{
                        attributes{
                          name
                        }
                      }
                    },
                    sizes{
                      data{
                        attributes{
                          kind
                        }
                      }
                    }
                  }
                }
          }
        }
        
      `;

   
      
function Product() {
  const router = useRouter();
  const pId = router?.query?.pId;


  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID,{
    variables: {pId: pId} ,
  });
  if(loading) return <Box sx={{display:'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}><NavLoading/></Box>
  if(error) return <h1>{error.message}</h1>
  

	return (
	<Container mexWidth="lg">
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

