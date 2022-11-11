
import { gql } from '@apollo/client';
import client from '../components/apollo/client';
import Banner from '../components/Home/Banner';
import FlashDeals from '../components/Home/FlashDeals';
import Popular from '../components/Home/Popular';


import TopImage from '../components/Home/TopImage';



export default function Home({ data }) {
  // const popular = data && data?.products?.data.reverse()
  return (
    <div>
      <Banner></Banner>
      <FlashDeals data={data?.products.data}></FlashDeals>
      <Popular data={data?.products.data}></Popular>
      <TopImage></TopImage>
    </div>
  );
}

/* 

########################################################
########################################################
*/






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
          }
        }
      }
    `,
  });




  return {
    props: { data }
  };
};

 

