import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const BannerTitle = styled(Typography)(({ theme }) => ({
  // color: theme.secondary.gray50,
  fontFamily: theme.fontName?.barlow,
  fontWeight: "700",
  fontSize: "68px",
  lineHeight: "82px",
  display: "flex",
  alignItems: "center",
  textTransform: "uppercase",
  color: theme?.palette?.secondary.gray50,
}));

export const Section = styled("section")(({ theme }) => ({
  width: "100%",
  height: "auto",
  background: "transparent",
}));

export const SectionHeading = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  width: "100%",
  font: theme?.font?.barlowSemiBold32,
  lineHeight: "38px",
  textTransform: "uppercase",
}));

// Card Design

export const Card = styled(Box)(({ theme }) => ({
  width: "100%",
  background: theme?.palette.secondary.gray50,
  padding: "16px 16px 24px",
  boxShadow: "0px 2px 7px rgba(51, 65, 85, 0.08)",
  borderRadius: "10px",
}));

export const CardImageBox = styled(Box)(({ theme }) => ({
  background: theme?.palette.secondary.gray600,
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
}));

export const CardImage = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "block",
}));

export const CardContentBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  font: theme?.font.interMedium16,
  lineHeight: "19px",
  display: "flex",
  alignItems: "center",

  textTransform: "capitalize",
  "&: hover": {
    textDecoration: "underline",
  },

  /* Gray/800 */

  color: theme.palette?.secondary.main,
}));

export const CardPricingSection = styled(Stack)(({theme})=>({
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'

}))

export const CardPrice = styled(Stack)(({theme})=>({
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    color: theme.palette.primary.main,
    font: theme.font?.interMedium18
}))


