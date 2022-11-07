import { Grid } from "@mui/material";
import React from "react";
import { FootHeading } from "../../Styles/Footer";
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
    <Grid container spacing={2} sx={{ paddingBottom: "80px" }}>
      {footComHeading.map((item) => {
        return (
          <Grid key={item} item md={3} lg={3} xs={12} sm={6}>
            <FootHeading variant="title" component="h6">
              {item === item.toString() ? item : Object.keys(item)}
            </FootHeading>
            {item !== item.toString() && <Widget item={item} />}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FooterTop;
