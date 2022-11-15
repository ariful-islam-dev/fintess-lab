import { styled, Typography } from "@mui/material";



export const SidebarTitle = styled(Typography)(({theme})=>({
font: theme?.font?.interSemiBold20,
lineHeight: `24px`,
letterSpacing: `-0.01em`,

/* Gray/800 */

color: theme?.palette?.secondary?.gray800
}));


export const FilterContainer = styled(('aside'))(({theme})=>({
    background: theme.palette.secondary.gray50,
    margin: '0 10px',
    padding: '10px', borderRadius: '8px'
}))