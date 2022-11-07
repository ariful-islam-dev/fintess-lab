import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/system';

// export const customTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//       contrastText: 'white',
//     },
//   },
// });
export const customTheme2 = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'red',
      contrastText2: 'white',
    },
    secondary: {
      main: '#fb0d0d',
      contrastText: 'red',
      contrastText2: 'white',
    },
    custom: {
      main: '#70fb0d',
      contrastText: 'red',
      contrastText2: 'white',
    },
  },
});

export const MyThemeComponent = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));
export const MyThemeComponent2 = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText2,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));
