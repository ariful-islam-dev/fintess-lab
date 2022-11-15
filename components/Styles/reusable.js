import { Typography } from "@mui/material";

import { styled } from "@mui/material/styles";




export const ButtonMaster = styled(('button'))(({ theme, btn, off, disabled, cart }) => ({
  color: `${
    (btn === "secondary" && theme?.palette?.secondary?.main) ||
    (btn === "light" && theme.palette?.primary?.main) ||
    (disabled && theme.palette?.primary?.light) ||
    (theme.palette?.secondary?.gray50)
  }`,
  background: `${
    (btn === "secondary" && theme?.palette?.secondary?.gray50) ||
    (btn === "light" && theme.palette?.primary.light) ||
    (disabled && theme.palette?.secondary.gray400) ||
    (theme.palette?.primary.main)
  }`,
  border: 'none',
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "10px",
  borderRadius: "8px",
  padding: `${off && "5px 5px" || cart && "2px" ||"16px 32px"}`,
  font: `${off ? theme.font?.interMedium13 : theme.font?.interSemiBold16} `,
  textTransform: "none",

  "&: hover": {
    color: `${
      (btn === "secondary" && theme.palette?.secondary.gray50) ||
      (btn === "light" && theme.palette?.secondary.gray50) ||
      theme.palette?.secondary.gray50
    }`,
    background: `${
      (btn === "secondary" && theme.palette?.primary.main) ||
      (btn === "light" && theme.palette?.primary.main) ||
      theme.palette?.primary.dark
    }`,
  },
}));

export const Heading3 = styled(Typography)(({ theme }) => ({
  font: theme.font?.barlowSemiBold24,
  lineHeight: "29px",
  /* identical to box height */

  display: "flex",
  alignItems: "center",

  color: theme.palette?.secondary.main,
}));
