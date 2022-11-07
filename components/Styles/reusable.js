import { Button } from "@mui/material";

import { styled } from '@mui/material/styles';

export const ButtonMaster = styled(Button)(({ theme, btn, off, white, discount }) => ({
    color: `${(btn === 'secondary' && theme?.palette?.secondary?.main) || (btn === 'light' && theme.palette?.primary?.main) || (white && theme.palette.primary.custom) || (!btn && theme.palette?.secondary?.gray50)}`,
    background: `${(btn === 'secondary' && theme?.palette?.secondary?.gray50) || (btn === 'light' && theme.palette?.primary.light) || (white && theme?.palette?.secondary.gray50) || (!btn && theme.palette?.primary.main)}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '10px',
    borderRadius: '8px',
    padding: `${(off && '4px 12px') || (discount && '6px 12px') || '16px 32px'}`,
    font: `${(off && theme.font?.interMedium13) || (discount && theme.font?.interMedium16) || theme.font?.interSemiBold16}`,
    textTransform: 'none',
    "&: hover": {
        color: `${btn === 'secondary' && theme.palette?.secondary.gray50 || btn === 'light' && theme.palette?.secondary.gray50 || theme.palette?.secondary.gray50}`,
        background: `${btn === 'secondary' && theme.palette?.primary.main || btn === 'light' && theme.palette?.primary.main || theme.palette?.primary.dark}`
    },


}));
