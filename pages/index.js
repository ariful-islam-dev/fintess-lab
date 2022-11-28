import Head from "next/head";
import client from "../components/Apollo/client";
import { HOME_PRODUCT } from "../components/Apollo/query";
import Banner from "../components/Home/Banner";
import FlashDeals from "../components/Home/FlashDeals";
import Popular from "../components/Home/Popular";

import TopImage from "../components/Home/TopImage";

export default function Home({data}) {
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

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: HOME_PRODUCT
  });

  return {
    props: { data },
  };
};
