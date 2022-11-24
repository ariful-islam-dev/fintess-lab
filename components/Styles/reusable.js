

import { Box } from "@mui/material";
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
    (!btn && theme.palette?.primary.main)
 

  }`,
  border: 'none',
  cursor: 'pointer',
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


export const Box1 = styled(Box)(({ theme }) => ({
  background: "#fff",
  borderRadius: "12px",
  padding: "24px",
  paddingBottom: "32px",
}))

