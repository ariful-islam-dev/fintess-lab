
import { Box, Button } from "@mui/material";

import { styled } from "@mui/material/styles";
import { fontFamily } from "@mui/system";
import { theme } from ".";

export const ButtonMaster = styled(Button)(({ theme, btn, off }) => ({
  color: `${
    (btn === "secondary" && theme?.palette?.secondary?.main) ||
    (btn === "light" && theme.palette?.primary?.main) ||
    (!btn && theme.palette?.secondary?.gray50)
=======
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

    (!btn && theme.palette?.primary.main)
  }`,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "10px",
  borderRadius: "8px",
  padding: `${off ? "4px 12px" : "16px 32px"}`,
  font: `${off ? theme.font?.interMedium13 : theme.font?.interSemiBold16}`,
  textTransform: "none",

    (disabled && theme.palette?.secondary.gray400) ||
    (theme.palette?.primary.main)
  }`,
  border: 'none',
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
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


/**
 * @Heading3
 * @Fontsize: 24px
 * Font weight: semibold
 */
export const Heading3 = styled("h3")(({ theme, border }) => ({
  color: `${theme.palette.secondary.main}`,
  fontFamily: `${theme.fontName.barlow}`,
  borderBottom: `${
    border ? `1px solid ${theme?.palette.secondary.gray100}` : "none"
  }`,
  fontSize: "24px",
  marginBottom: "28px",
  paddingBottom: "10px",
  letterSpacing: "-1%",
}));

/**
 * @box1
 * Padding: 24px
 * background: white
 * Border radius: 12px
 */
export const Box1 = styled(Box)(({ theme }) => ({
  background: "#fff",
  borderRadius: "12px",
  padding: "24px",
  paddingBottom: "32px",

