import { Box, InputLabel, Stack, styled, TextField, Typography } from "@mui/material";


export const AuthHeader = styled(Stack)(({theme})=>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
}))
export const AuthHeading = styled(Typography)(({theme})=>({
    font: theme.font.barlowSemiBold24,
    lineHeight: '29px',

color: theme.palette.secondary.gray700
}))
export const AuthTitle = styled(Typography)(({theme})=>({
    font: theme.font.interSemiBold16,
lineHeight: "19px",

letterSpacing: "-0.01em",

/* Gray/700 */

color: theme.palette.secondary.gray700

}))

export const InputBox = styled(Box)(({theme})=>({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    padding: "10px 0"
}))

export const Label = styled(InputLabel)(({theme})=>({

font: theme.font.interMedium14,
lineHeight: '17px',
color: theme.palette.secondary.gray700,
width: '100%',
padding: '10px 0'
}))

export const Input = styled(TextField)(({theme})=>({
width: '100%',
background: theme.palette.secondary.gray50,
lineHeight: '30px',
border: `1px solid ${theme.palette.secondary.gray200}`,
borderRadius: '8px',

}))

export const ErrorMessage = styled(Typography)(({theme})=>({
    font: theme.font.interMedium14,
lineHeight: '14px',
color: theme.palette.primary.dark,
width: '100%',
}))