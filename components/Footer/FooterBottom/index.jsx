import {
  Box,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import master from "../../../public/images/master.png";
import paypal from "../../../public/images/paypal.png";
import visa from "../../../public/images/visa.png";
import electron from "../../../public/images/visa_electron.png";

const footerCard = [
  {
    name: "Visa Card",
    icon: visa,
  },
  {
    name: "Master Card",
    icon: paypal,
  },
  {
    name: "Paypal",
    icon: master,
  },
  {
    name: "Visa Electron",
    icon: electron,
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
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={80}
                      height={40}
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
