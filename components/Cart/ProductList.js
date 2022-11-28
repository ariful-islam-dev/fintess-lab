import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useStoreActions } from "easy-peasy";
import Image from "next/image";
import React from "react";
import { Box1, Heading3 } from "../../components/Styles/reusable";

export default function ProductList({ data }) {
  const {removeCart}=useStoreActions(actions=>actions.cart)
  return (
    <Box1>
      <Heading3 border>Shipping</Heading3>
      {data.length === 0 &&
        <Typography variant='h2'> Sorry Your Cart is Empty! Please Add any Product</Typography>
      }
      <Grid container spacing={2}>
        {data?.map((item) => (
          <>
            <Grid item xs={7} display="flex">
              <Image
                src={item?.thumbnail}
                alt="Cart Info"
                width={500}
                height={500}
                style={{borderRadius: '50%'}}
              />
              <Stack sx={{ ml: 2 }}>
                <Typography variant="body1">
                  {item.title}
                </Typography>
                
                <Grid>
                  <Button variant="text" onClick={()=>removeCart(`${item.productId}`)}>Remove</Button>
                </Grid>
              </Stack>
            </Grid>
            <Grid xs={1}></Grid>
            <Grid item xs={2}>
              <Typography>${item.price}</Typography>
             
            </Grid>
            <Grid item xs={2}>
              <Grid display="flex" justifyContent="space-between">
                <IndeterminateCheckBoxIcon></IndeterminateCheckBoxIcon>
                <Typography>{item.quantity}</Typography>
                <AddBoxIcon></AddBoxIcon>
              </Grid>
            </Grid>
          </>
        ))}
      </Grid>
      
    </Box1>
  );
}
