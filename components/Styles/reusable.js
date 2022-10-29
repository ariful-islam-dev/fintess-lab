import { Button } from "@mui/material";

import { styled } from '@mui/material/styles';

export const ButtonMaster = styled(Button)(({theme, btn})=>({
    color:`${( btn === 'secondary' && theme?.palette?.secondary?.main) || (btn === 'light'&& theme.palette?.primary?.main) || ( !btn &&theme.palette?.secondary?.gray50)}`, 
    background: `${(btn === 'secondary'&& theme?.palette?.secondary?.gray50) || (btn === 'light' && theme.palette?.primary.light) ||(!btn && theme.palette?.primary.main)}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '10px',
    borderRadius: '8px', 
    padding: '16px 32px',
    font: theme.font?.interSemiBold16,        
    textTransform: 'none', 
    "&: hover":{
        color: `${btn === 'secondary'&& theme.palette?.secondary.gray50 ||btn === 'light'&& theme.palette?.secondary.gray50|| theme.palette?.secondary.gray50}`,
        background: `${btn === 'secondary' && theme.palette?.primary.main ||btn === 'light' && theme.palette?.primary.main || theme.palette?.primary.dark }`
    }
   
})) 
