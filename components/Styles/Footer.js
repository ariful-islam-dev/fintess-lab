import { Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterArea = styled("footer")(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.secondary.gray50,
  padding: "68px 0"
}));
export const Anchor = styled(Link)(({ theme }) => ({
  font: theme.font?.interMedium14,
  color: theme.palette?.secondary.gray500,
  padding: '5px 0px',
  textDecoration: "none",
  "&: hover": {
    textDecoration: "underline",
  },
}));
export const FootHeading = styled(Typography)(({ theme }) => ({
  font: theme.font.interSemiBold16,
  lineHeight: "19px",
  textTransform: "uppercase",
  color: theme.palette.secondary.gray50,

}));
