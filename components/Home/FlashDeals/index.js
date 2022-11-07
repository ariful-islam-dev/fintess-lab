import { Box, CardContent, Container, Grid } from '@mui/material';
import Link from 'next/link';

import {
  Card,
  CardImage,
  CardImageBox,
  CardPrice,
  CardPricingSection,
  CardTitle,
  Section,
  SectionHeading,
  SectionTitle,
  StyledCardContent,
} from '../../Styles/Home';

import cardImg from '../../images/image 2.jpg';
// import data from '../../../utils/data';

import { ButtonMaster } from '../../Styles/reusable';
import { gql } from '@apollo/client';
import client from '../../Apollo/client';
import ProductCard from '../ProductCard/Index';

export default function FlashDeals({ data }) {
  const product = data.products.data;
  const discountProduct = product.filter((item) => item.attributes.discount_price);
  // console.log(discountProduct);
  return (
    <Section>
      <Container maxWidth='lg' sx={{ my: 5, py: 5 }}>
        <SectionHeading>
          <SectionTitle>Flash Deals</SectionTitle>
          <Link href={'/shop'}>View More</Link>
        </SectionHeading>
        <Grid container spacing={2}>
          {discountProduct.slice(0, 4).map((item) => (
            <Grid item md='3' key={item.id}>
              <ProductCard item={item}></ProductCard>
            </Grid>
          )

          )}
        </Grid>
      </Container>
    </Section>
  );
}



// const {data, error, loading } =  useQuery(GET_PRODUCT);
// if(loading) return loading
// if(error) return error.message

