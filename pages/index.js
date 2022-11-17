import { useQuery } from "@apollo/client";
import Head from "next/head";
import client from "../components/Apollo/client";
import Banner from "../components/Home/Banner";
import FlashDeals from "../components/Home/FlashDeals";
import Popular from "../components/Home/Popular";

import TopImage from "../components/Home/TopImage";
import { GET_PRODUCTS } from "../utils/action";

export default function Home() {
  const { data } = useQuery(GET_PRODUCTS);
  return (
    <div>
      <Head>
        <title>Home || Fitness Lab</title>
      </Head>
      <Banner></Banner>
      <FlashDeals data={data?.products?.data}></FlashDeals>
      <Popular data={data?.products?.data}></Popular>
      <TopImage></TopImage>
    </div>
  );
}

/* 

########################################################
########################################################
*/

export const geStaticsProps = async () => {
  const { data } = await client.query({
    query: gql`
      query getProducts {
        products {
          data {
            id
            attributes {
              title
              price
              discount_price

              thumbnails {
                data {
                  id
                  attributes {
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
    props: { data },
  };
};
