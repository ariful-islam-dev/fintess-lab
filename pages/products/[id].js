import { gql } from "@apollo/client";
import client from "../../components/Apollo/client";
import ProductDetails from "../../components/ProductDetails/AboutProduct";
import AboutProduct from "../../components/ProductDetails/AboutProduct";

export default function Post({ data }) {
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

export async function getStaticPaths() {
	const { data } = await client.query({
		query: gql`
          query getProducts  {
            products(pagination:{page:1, pageSize: 50}){
              data{
                id
              }
            }
          }
        `,
	});

	const productsId = data.products.data;
	const paths = productsId.map((product) => {

		console.log('PRODUCT IS', product);
		return ({
			params: { id: product.id },
		});
	});
	return { paths, fallback: false };
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

	// const {data, error, loading } =  useQuery(GET_PRODUCT);
	// if(loading) return loading
	// if(error) return error.message

	return {
		props: { data }
	};
};



