<<<<<<< HEAD
import { Box } from "@mui/material";
import Checkout from "./checkout";

export default function Home() {
  return <Box></Box>;
=======
import { Container } from '@mui/material'
import { BannerTitle, ButtonMaster, SectionHeading } from '../components/Styles/Pages'
import bannerUrl from '../public/banner.jpeg'


export default function Home() {

  const banner = {
    background : `url(${bannerUrl.src})`, 
   
}    
  return (
    <div style={banner} >
     <Container>
      <BannerTitle>10% Off for your first order</BannerTitle>
      <ButtonMaster color="secondary" >Primary</ButtonMaster>
      <ButtonMaster color="light" >Primary</ButtonMaster>
      <ButtonMaster>Buy Now</ButtonMaster>
      <SectionHeading>More For You</SectionHeading>
      
     </Container>
    </div>
  )
>>>>>>> develop
}
