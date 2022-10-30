<<<<<<< HEAD
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import FlashDetails from './components/FlashDetails';
import Header from './components/Header';
import HomePage from './components/HomePage';
import MidSection from './components/MidSection';
import TopProducts from './components/TopProducts';
import Container from './components/Container';
import Final from './components/Final';




export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <HomePage></HomePage>
      <FlashDetails></FlashDetails>
      <TopProducts></TopProducts>
      <MidSection></MidSection>
      <Final></Final>
      {/* <Container></Container> */}


      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
=======
import { CardContent, Container, Grid } from '@mui/material';
import Link from 'next/link';
import cardImg from '../components/images/image 2.jpg';
import { BannerTitle, Card, CardImage, CardImageBox, CardPrice, CardPricingSection, CardTitle, Section, SectionHeading, SectionTitle } from '../components/Styles/Home';
import { ButtonMaster } from '../components/Styles/reusable';
import bannerUrl from '../public/banner.jpeg';

>>>>>>> develop

export default function Home() {

<<<<<<< HEAD
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>

          </a>
        </div>
      </main>
=======
  const banner = {
    background : `url(${bannerUrl.src})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    heigh: '300px'
   
}    
  return (
    <div style={banner} >
     <Container>
      <BannerTitle variant='h1' >10% Off for your first order</BannerTitle>
      <ButtonMaster btn="secondary"   >Primary</ButtonMaster>
      <ButtonMaster btn="light" >Primary</ButtonMaster>
      <ButtonMaster>Buy Now</ButtonMaster>
      <SectionHeading>
        <SectionTitle>More For You</SectionTitle>
        <Link href={'/shop'}>View More</Link>
      </SectionHeading>
>>>>>>> develop

      <Section>
      <Container maxWidth="lg">
      <SectionHeading>
        <SectionTitle>More For You</SectionTitle>
        <Link href={'/shop'}>View More</Link>
      </SectionHeading>
      <Grid container spacing={2}>
        <Grid item md="3">
          <Card>
            <CardImageBox>
              <CardImage src={cardImg.src} alt="Card Image"  width={500}
      height={500} fill />
      <ButtonMaster sx={{
        position: 'absolute',
        top: '10px',
        left: '10px'
      }} off >10% Off</ButtonMaster>
            </CardImageBox>
            <CardContent>
              <CardTitle variant={"h4"}>T-Shirt</CardTitle>
              <CardPricingSection>
                <CardPrice>$25.00</CardPrice>
                <ButtonMaster btn="light">+</ButtonMaster>
              </CardPricingSection>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Container>
      </Section>
      
     </Container>
    </div>
  );
}
