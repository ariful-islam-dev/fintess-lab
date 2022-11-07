
import { gql } from '@apollo/client';
import client from '../../components/Apollo/client';
import AboutProduct from '../../components/ProductDetails/AboutProduct';
import Shop from '../../components/Shop';

export default function Products({ data }) {
  return (
    <div>
      <h1>This is product</h1>
      <Shop data={data}></Shop>
    </div>
  );
}






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


  // const {data, error, loading } =  useQuery(GET_PRODUCT);
  // if(loading) return loading
  // if(error) return error.message

  return {
    props: { data },
  };
};

 
  
  return{
   props: {data}
  }
}


export default Products;
