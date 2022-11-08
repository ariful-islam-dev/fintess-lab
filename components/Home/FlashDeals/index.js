import { Container, Grid } from '@mui/material';
import Link from 'next/link';

import {
  Section,
  SectionHeading,
  SectionTitle
} from '../../Styles/Home';

// import data from '../../../utils/data';

import ProductCard from '../ProductCard/Index';

export default function FlashDeals({ data }) {
  const product = data.products.data;
  const discountProduct = product.filter((item) => item.attributes.discount_price);
  return (
    <Section>
      <Container maxWidth='lg' sx={{ my: 5, py: 5 }}>
        <SectionHeading>
          <SectionTitle>Flash Deals</SectionTitle>
          <Link href={'/product'} passHref><a>View More</a></Link>
        </SectionHeading>
        <Grid container spacing={2}>
          {discountProduct.slice(0, 4).map((item) => (
            <Grid item md={3} key={item.id}>
              <ProductCard item={item}></ProductCard>
            </Grid>
          )

          )}
        </Grid>
      </Container>
    </Section>
  );
}




