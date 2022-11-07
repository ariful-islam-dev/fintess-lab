import { Container, Grid } from "@mui/material";
import Link from "next/link";

import { Section, SectionHeading, SectionTitle } from "../Styles/Home";

import ProductCard from "../Home/ProductCard/Index";
// import { Section } from '../Styles/Home';

export default function Shop({ data }) {
  const product = data.products.data;

  return (
    <Section>
      <Container maxWidth="lg" sx={{ my: 5, py: 5 }}>
        <SectionHeading>
          <SectionTitle>Products</SectionTitle>
          <Link href={"/products"}>View More</Link>
        </SectionHeading>
        <Grid container spacing={2}>
          {product.slice(0, 4).map((item) => (
            <Grid item md="4" key={item.id}>
              <ProductCard item={item}></ProductCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
