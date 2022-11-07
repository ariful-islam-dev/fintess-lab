import * as React from 'react';
import { styled, createTheme, ThemeProvider, createStyled } from '@mui/system';
import Button from '@mui/material/Button';

const customTheme = createTheme({
  components: {
    MyThemeComponent: {
      styleOverrides: {
        root: {
          color: 'darkslategray',
        },
        primary: {
          color: 'darkblue',
        },
        secondary: {
          color: 'darkred',
          backgroundColor: 'pink',
        },
        order: {
          color: 'red',
          backgroundColor: 'green',
          variant: 'dashed',
          border: '2px dashed yellow',
        },
      },
      variants: [
        {
          props: { variant: 'dashed', type: 'buy' },
          style: {
            border: '10px dashed darkblue',
          },
        },
        {
          props: { variant: 'dashed', type: 'check' },
          style: {
            border: '2px dashed darkred',
          },
        },
        {
          props: { variant: 'dashed', type: 'order' },
          style: {
            border: '5px dashed darkred',
          },
        },
      ],
    },
  },
});

const MyThemeComponent = createStyled('button', {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== 'type',
  name: 'MyThemeComponent',
  slot: 'Root',
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => {
    console.log();
    return [
      styles.root,
      props.type === 'buy' && styles.primary,
      props.type === 'check' && styles.secondary,
      props.type === 'order' && styles.order,
    ];
  },
})(({ theme }) => ({
  backgroundColor: 'aliceblue',
  padding: theme.spacing(1),
}));

export default function UsingOptions() {
  return (
    <ThemeProvider theme={customTheme}>
      <MyThemeComponent sx={{ m: 1 }} type='buy' variant='dashed'>
        Primary
      </MyThemeComponent>
      <MyThemeComponent sx={{ m: 1 }} type='check' variant='dashed'>
        Secondary
      </MyThemeComponent>

      <MyThemeComponent me='do' sx={{ m: 1 }}>
        Secondary
      </MyThemeComponent>
      <MyThemeComponent sx={{ m: 1 }} type='order' variant='dashed'>
        Order Now
      </MyThemeComponent>
    </ThemeProvider>
  );
}
