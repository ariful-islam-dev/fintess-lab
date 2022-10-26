import { Grid, Typography } from "@mui/material";
import React from "react";
import Widget from "./Widget";

const footComHeading = [
  {
    "Company Info": [
      {
        name: "About US",
        path: "/about",
      },
      {
        name: "Latest Posts",
        path: "/posts",
      },
      {
        name: "Contact US",
        path: "/contact",
      },
      {
        name: "Shop",
        path: "/posts",
      },
    ],
  },
  {
    "Help Links": [
      {
        name: "Tracking",
        path: "/",
      },
      {
        name: "Order Status",
        path: "/",
      },
      {
        name: "Delivery",
        path: "/order",
      },
      {
        name: "Shopping Info",
        path: "/",
      },
      {
        name: "FAQ",
        path: "/",
      },
    ],
  },
  {
    "Useful Links": [
      {
        name: "Special Offers",
        path: "/",
      },
      {
        name: "Gift Cards",
        path: "/",
      },
      {
        name: "Advertising",
        path: "/",
      },
      {
        name: "Terms of Use",
        path: "/",
      },
    ],
  },
  "Get The Latest Update",
];

const FooterTop = () => {
  return (
    <Grid container spacing={2}>
      {footComHeading.map((item) => {
        console.log(item);
        return (
          <Grid key={item} item lg={3}>
            <Typography container="h6" variant="h6">
              {item === item.toString() ? item : Object.keys(item)}
            </Typography>
            {item !== item.toString() && <Widget item={item} />}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FooterTop;
