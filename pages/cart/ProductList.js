import { Box, Button, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from "@mui/icons-material/AddBox";

export default function ProductList() {
  return (
    <Box sx={{ background: "#fff", padding: "24px", marginBottom: "24px" }}>
      <Typography
        marginBottom
        sx={{ paddingBottom: "10px", borderBottom: "1px solid #F3F4F6" }}
        variant="h5"
        color="gray.700"
      >
        Shipping
      </Typography>
      <Grid container spacing={2} sx={{ marginBottom: "24px" }}>
        <Grid item xs={7} display="flex">
          <img
            width="30%"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            alt=""
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
          <img
            width="30%"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            alt=""
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
    </Box>
  );
}
