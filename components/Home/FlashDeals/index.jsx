import { Container, Grid } from "@mui/material";
import ProductCard from "../../Product/Cards/ProductCard";
import { Section } from "../../Styles/Home";

import SectionHeader from "../SectionHeader";

export default function FlashDeals({ data }) {
  const discountProduct = data?.filter(
    (item) => item.attributes.discount_price
  );
  return (
    <Section>
      <Container maxWidth="lg" sx={{ my: 5, py: 5 }}>
        <SectionHeader title={"Flash Deals"} link={"View all"} />
        <Grid container spacing={2}>
          {discountProduct?.slice(0, 4).map((item) => (
            <Grid item xl={2} lg={3} md={4} sm={6} xs={6} key={item.id}>
              <ProductCard item={item}></ProductCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
