import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import img4 from "../../../public/images/image4.jpg";
import img5 from "../../../public/images/image5.jpg";
import { ImageTitle, TopItem } from "../../Styles/Home";
import { ButtonMaster } from "../../Styles/reusable";

const TopImage = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: "30px 30px 50px 30px",
    textAlign: "start",
    color: theme.palette.text.secondary,
    borderRadius: 15,
    display: "flex",
    alignItems: "flex-end",
    margin: "300px",
  }));

  const midBanner1 = {
    backgroundImage: `url(${img4.src})`,

    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "black",
    backgroundSize: "cover",
    height: 600,
    // width: 200,
    margin: 0,
  };
  const midBanner2 = {
    backgroundImage: `url(${img5.src})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "red",
    backgroundSize: "cover",
    height: 600,
    // width: '80%',
    margin: 0,
  };
  // console.log('hello', img4);
  return (
    <Container sx={{ my: 10 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ md: 4, xs: 2 }}>
          <Grid item xs={12} md={7}>
            <TopItem sx={{ ...midBanner1 }}>
              <ButtonMaster
                sx={{
                  position: "absolute",
                  top: "9%",
                  left: "12%",
                }}
              >
                10% Off
              </ButtonMaster>
              <Box>
                <ImageTitle sx={{ color: "white" }} variant="h3">
                  HOME GYM BENCH
                </ImageTitle>
                <Typography sx={{ color: "white" }} variant="body1">
                  Fitness world a reliable & compatible source of sports &
                  fitness equipment’s company
                </Typography>
                <ButtonMaster btn="light">BUY NOW</ButtonMaster>
              </Box>
            </TopItem>
          </Grid>
          <Grid item xs={12} md={5}>
            <Item sx={midBanner2}></Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TopImage;
