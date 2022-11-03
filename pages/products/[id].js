import { gql } from '@apollo/client';
import React from 'react';
import client from '../../components/apollo/client';

const Product = ({product}) => {
    console.log(product)
    return (
        <div>
           <h1> This is a single Products</h1>
        </div>
    );
};
// pages/posts/[id].js

// Generates `/posts/1` and `/posts/2`
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
    
        const paths = productsId.map((product) => ({
            params: { id: product.id },
          }))
    return { paths, fallback: false }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps({params}) {

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
      // Passed to the page component as props
      props: { product: data },
    }
  }

export default Product;