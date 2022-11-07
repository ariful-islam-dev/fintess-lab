// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
// import FlashDetails from './components/FlashDetails';
// import Header from './components/Header';
// import HomePage from './components/HomePage';
// import MidSection from './components/MidSection';
// import TopProducts from './components/TopProducts';

// import Final from './components/Final';
import { Box, Container } from '@mui/material';

import bannerUrl from '../../../public/images/bannerimage.jpg';
import { ButtonMaster } from '../../Styles/reusable';
import { BannerTitle } from '../../Styles/Home';

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

export default function Banner() {
  const banner = {
    background: `url(${bannerUrl.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 600,
  };
  return (
    <Box sx={{ ...banner, display: 'flex', alignItems: 'center' }}>
      <Container>
        <BannerTitle>
          10% Off <br /> for your first order
        </BannerTitle>
        <ButtonMaster>SHOP NOW</ButtonMaster>
      </Container>
    </Box>
  );
}
