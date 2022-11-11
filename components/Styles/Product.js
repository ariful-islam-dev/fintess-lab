import { styled, Typography } from "@mui/material";



export const SidebarTitle = styled(Typography)(({theme})=>({
    font: theme?.font?.interSemiBold20,
lineHeight: `24px`,
letterSpacing: `-0.01em`,

/* Gray/800 */

color: theme?.palette?.secondary?.gray800
})) 