
import { gql } from '@apollo/client';
import client from '../components/apollo/client';
import Banner from '../components/Home/Banner';
import FlashDeals from '../components/Home/FlashDeals';


import TopImage from '../components/Home/TopImage';
import TopProducts from '../components/Home/TopProducts';



export default function Home({ data }) {


  return (
    <div>
      <Banner></Banner>
      <FlashDeals data={data}></FlashDeals>
      <TopProducts></TopProducts>
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

 

