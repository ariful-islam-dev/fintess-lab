import { Grid } from "@mui/material";

import ProductCard from "./ProductCard";

const Cards = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data?.map((item) => (
        <Grid item key={item.id} lg={3} md={4} sm={6} xs={12}>
          <ProductCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
