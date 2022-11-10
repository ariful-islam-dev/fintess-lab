import { Box, Container } from "@mui/material";

import { useRouter } from "next/router";
import bannerUrl from "../../../public/images/bannerimage.jpg";
import { BannerTitle } from "../../Styles/Home";
import { ButtonMaster } from "../../Styles/reusable";

export default function Banner() {
  const banner = {
    background: `url(${bannerUrl.src})`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "black",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 600,
  };

  const router = useRouter();
  return (
    <Box sx={{ ...banner, display: "flex", alignItems: "center" }}>
      <Container>
        <BannerTitle>
          10% Off <br /> for your first order
        </BannerTitle>
        <ButtonMaster
          sx={{ display: "inline-block" }}
          onClick={() => router.push("/products")}
        >
          SHOP NOW
        </ButtonMaster>
      </Container>
    </Box>
  );
}
