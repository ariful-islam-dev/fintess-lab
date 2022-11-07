
import { gql } from "@apollo/client";
import client from "../../components/apollo/client";
import ProductDetails from "../../components/ProductDetails";

 function Product({ data }) {
	return (
		<div>
			<ProductDetails data={data}></ProductDetails>
		</div>
	);
};


/* 

########################################################
########################################################
*/

// pages/posts/[id].js

export async function getStaticPaths() {
  
  const { data } = await client.query({
		query: gql`
          query getProduct{
            products(pagination: {page: 1, pageSize: 50}){
              data{
                id
              }
            }
          }
          `
        });


  const paths = data.map((post) => ({
    params: { id: post.id },
  }))

  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}






export const getStaticProps = async ({ params }) => {
	const { data } = await client.query({
		query: gql`
          query getProduct{
            product(id: ${params.id}){
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
        `,

	});


	return {
		props: { data }
	};
};


export default Product;

