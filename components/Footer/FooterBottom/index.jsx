import {
  Box,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const footerCard = [
  {
    name: "Visa Card",
    icon: "http://localhost:3000/images/visa.png",
  },
  {
    name: "Master Card",
    icon: "http://localhost:3000/images/master.png",
  },
  {
    name: "Paypal",
    icon: "http://localhost:3000/images/paypal.png",
  },
  {
    name: "Visa Electron",
    icon: "http://localhost:3000/images/visa_electron.png",
  },
];

const FooterBottom = () => {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Stack>
              <Typography variant="body2">
                &copy; All Right Reserved by Team-E ` {"Fitness GYM"}`
              </Typography>
              <Typography variant="body2">
                Privacy Policy{" "}
                <Link href={"/"} passHref>
                  <a style={{ textDecoration: "underline", color: "purple" }}>
                    Terms & Condition
                  </a>
                </Link>
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={6}>
            <Stack>
              <ImageList
                sx={{
                  width: "100%",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {footerCard.map((item) => (
                  <ImageListItem key={item.name} sx={{ width: 80, height: 40 }}>
                    <img
                      src={item.icon}
                      srcSet={item.icon}
                      alt={item.name}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FooterBottom;
