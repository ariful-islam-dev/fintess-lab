import { Grid } from "@mui/material";

import ProductCard from "./ProductCard";

const Cards = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data?.map((item) => (
        <Grid item key={item.id} lg={4}>
          <ProductCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
