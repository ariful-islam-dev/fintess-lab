// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
// import FlashDetails from './components/FlashDetails';
// import Header from './components/Header';
// import HomePage from './components/HomePage';
// import MidSection from './components/MidSection';
// import TopProducts from './components/TopProducts';

// import Final from './components/Final';
import { gql } from '@apollo/client';
import { Box, CardContent, Container, Grid } from '@mui/material';
import Link from 'next/link';
import client from '../components/Apollo/client';
import Exercise from '../components/Exercise/Exercise';
import Banner from '../components/Home/Banner';
import FlashDeals from '../components/Home/FlashDeals';
// import FlashDeals from '../components/Home/FlashDeals';

import TopImage from '../components/Home/TopImage';
import TopProducts from '../components/Home/TopProducts';
import cardImg from '../components/images/image 2.jpg';
import { BannerTitle, Card, CardImage, CardImageBox, CardPrice, CardPricingSection, CardTitle, Section, SectionHeading, SectionTitle } from '../components/Styles/Home';
import { ButtonMaster } from '../components/Styles/reusable';


import bannerUrl from '../public/banner.jpeg';
import FlashDetails from './components/FlashDetails';
import MidSection from './components/MidSection';



// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Header></Header>
//       <HomePage></HomePage>
//       <FlashDetails></FlashDetails>
//       <TopProducts></TopProducts>
//       <MidSection></MidSection>
//       <Final></Final>
//       {/* <Container></Container> */}




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
export const getStaticProps = async () => {
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

  // const {data, error, loading } =  useQuery(GET_PRODUCT);
  // if(loading) return loading
  // if(error) return error.message

  return {
    props: { data }
  };
};
