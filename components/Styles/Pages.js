import { Button } from "@mui/material";
import styled from "styled-components";


export const BannerTitle = styled(('h1'))(({theme})=>({
    color: theme.palette.secondary.gray50,
    fontFamily: theme.fontName.barlow,
    fontWeight: "700",
    fontSize: '68px',
    lineHeight: '82px',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase'
}));

export const ButtonMaster = styled(Button)(({theme, bg})=>({
    color:`${( bg === 'secondary' && theme.palette?.secondary.main) || (bg === 'light'&& theme.palette?.primary.main) || ( !bg &&theme.palette?.secondary.gray50)}`, 
    background: `${(bg === 'secondary'&& theme.palette.secondary.gray50) || (bg === 'light' && theme.palette.primary.light) ||(!bg && theme.palette.primary.main)}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '10px',
    borderRadius: '8px', 
    padding: '16px 32px',
    font: theme.font.interSemiBold16,     
    textTransform: 'none', 
    "&: hover":{
        color: `${bg === 'secondary'&& theme.palette.secondary.gray50 ||bg === 'light'&& theme.palette.secondary.gray50|| theme.palette.secondary.gray50}`,
        background: `${bg === 'secondary' && theme.palette.primary.main ||bg === 'light' && theme.palette.primary.main || theme.palette?.primary.dark }`
    }
   
}))


export const SectionHeading = styled(('h3'))(({theme})=>({
 width: '100%',
fontFamily: theme.fontName.barlow,
fontWeight: "700",
fontSize: theme.fontSize.f32,
lineHeight: '38px',
textTransform: "uppercase"

}))