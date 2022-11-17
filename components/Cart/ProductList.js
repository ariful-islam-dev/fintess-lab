import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import React from "react";
import { Box1, Heading3 } from "../../components/Styles/reusable";

export default function ProductList() {
  return (
    <Box1>
      <Heading3 border>Shipping</Heading3>
      <Grid container spacing={2}>
        <Grid item xs={7} display="flex">
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            alt="Cart Info"
            width={500}
            height={500}
          />
          <Stack sx={{ ml: 2 }}>
            <Typography variant="body1">
              Revoflex Xtreme Full Body Workout - Multicolor
            </Typography>
            <Grid container>
              <Grid sx={{ marginRight: "20px" }} display="flex">
                <Typography variant="caption">Color: </Typography>
                <Typography variant="body2">Black</Typography>
              </Grid>
              <Grid display="flex">
                <Typography variant="caption">Size: </Typography>
                <Typography variant="body2">XL</Typography>
              </Grid>
            </Grid>
            <Grid>
              <Button variant="text">Remove</Button>
            </Grid>
          </Stack>
        </Grid>
        <Grid xs={1}></Grid>
        <Grid item xs={2}>
          <Typography>$269.10</Typography>
          <Typography
            variant="caption"
            color={"#9CA3AF"}
            sx={{ textDecoration: "line-through" }}
          >
            $299
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Grid display="flex" justifyContent="space-between">
            <IndeterminateCheckBoxIcon></IndeterminateCheckBoxIcon>
            <Typography>3</Typography>
            <AddBoxIcon></AddBoxIcon>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={7} display="flex">
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            alt="Product"
            width={500}
            height={500}
          />
          <Stack sx={{ ml: 2 }}>
            <Typography variant="body1">
              Revoflex Xtreme Full Body Workout - Multicolor
            </Typography>
            <Grid container>
              <Grid sx={{ marginRight: "20px" }} display="flex">
                <Typography variant="caption">Color: </Typography>
                <Typography variant="body2">Black</Typography>
              </Grid>
              <Grid display="flex">
                <Typography variant="caption">Size: </Typography>
                <Typography variant="body2">XL</Typography>
              </Grid>
            </Grid>
            <Grid>
              <Button variant="text">Remove</Button>
            </Grid>
          </Stack>
        </Grid>
        <Grid xs={1}></Grid>
        <Grid item xs={2}>
          <Typography>$269.10</Typography>
          <Typography
            variant="caption"
            color={"#9CA3AF"}
            sx={{ textDecoration: "line-through" }}
          >
            $299
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Grid display="flex" justifyContent="space-between">
            <IndeterminateCheckBoxIcon></IndeterminateCheckBoxIcon>
            <Typography>3</Typography>
            <AddBoxIcon></AddBoxIcon>
          </Grid>
        </Grid>
      </Grid>
    </Box1>
  );
}
