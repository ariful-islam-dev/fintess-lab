import { gql } from "@apollo/client";
import { CardContent, Container, Grid } from "@mui/material";
import { useStoreActions } from 'easy-peasy';
import Link from "next/link";
import client from "../components/apollo/client";
import {
  BannerTitle,
  Card,
  CardImage,
  CardImageBox,
  CardPrice,
  CardPricingSection,
  CardTitle,
  Section,
  SectionHeading,
  SectionTitle
} from "../components/Styles/Home";
import { ButtonMaster, Heading3 } from "../components/Styles/reusable";
import bannerUrl from "../public/banner.jpeg";
import cardImg from "../public/images/image 2.jpg";






export default function Home({data}) {
  const banner = {
    background: `url(${bannerUrl.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    heigh: "300px",
  };

  const addMenuFromDatabase = useStoreActions(state=>state.addMenuFromDatabase)



  return (
    <>
      <div style={banner}>
        <Container>
          <BannerTitle variant="h1" sx={{fontSize: {xs: 40, md: 82}}}>10% Off for your first order</BannerTitle>
          <ButtonMaster btn="secondary">Primary</ButtonMaster>
          <ButtonMaster btn="light">Primary</ButtonMaster>
          <ButtonMaster>Buy Now</ButtonMaster>
        </Container>
      </div>
     <Section>
    <Container maxWidth="lg">
    <SectionHeading>
        <SectionTitle>More For You</SectionTitle>
        <Link href={"/shop"} passHref>
          View More
        </Link>
      </SectionHeading>
      
    </Container>
     </Section>

      <Section>
        <Container maxWidth="lg">
          <SectionHeading>
            <SectionTitle>More For You</SectionTitle>
            <Link href={"/shop"}>View More</Link>
          </SectionHeading>
          <Grid container spacing={2}>
            <Grid item md="3">
              <Card>
                <CardImageBox>
                  <CardImage
                    src={cardImg.src}
                    alt="Card Image"
                    width={500}
                    height={500}
                    fill
                  />
                  <ButtonMaster
                    sx={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                    }}
                    off
                  >
                    10% Off
                  </ButtonMaster>
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
      <Section>
        <Container>
          <Heading3 variant="h3">My Cart 2</Heading3>
        </Container>
      </Section>
    </>
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
          }
        }
      }
    `,
  });
 
  // const {data, error, loading } =  useQuery(GET_PRODUCT);
  // if(loading) return loading
  // if(error) return error.message
  
  return{
   props: {data}
  }
}