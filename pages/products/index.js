import { gql } from "@apollo/client";
import React from "react";
import client from "../../components/apollo/client";

const Products = () => {
  return (
    <div>
      <h1>This is product page</h1>
    </div>
  );
};

export const getStaticProps= async()=> { 
  const { data } = await client.query({ 
    query: gql`
      query getProducts  {
        products{
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
 
  
  return{
   props: {data}
  }
}


export default Products;
