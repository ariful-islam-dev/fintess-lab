import { Container, Grid } from "@mui/material";
import { Section } from "../../Styles/Home";

import ProductCard from "../../Product/Cards/ProductCard";
import SectionHeader from "../SectionHeader";

export default function Popular({ data }) {
  return (
    <Section>
      <Container maxWidth="lg" sx={{ my: 5, py: 5 }}>
        <SectionHeader title={"Popular Product"} link={"View All"} />
        <Grid container spacing={2}>
          {data?.slice(0, 4).map((product) => (
            <Grid key={product.id} item xl={2} lg={3} md={4} sm={6} xs={12}>
              <ProductCard item={product} popular></ProductCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
