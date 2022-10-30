import React from 'react';
import kidsImage from '../../public/images/d1.jpg';
import womenImage from '../../public/images/d2.jpg';
import menImage from '../../public/images/d3.jpg';
import { Box, Stack, styled, Typography } from '@mui/material';

const StyledBox = styled(Box)({
  height: 200,
  width: '100%',
  cursor: 'pointer',
  backgroundColor: 'red',
  margin: '25% 50px 25% 50px',
  //   margin: '25% 50px 25% 50px',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center center',
  //   backgroundSize: 'cover',
});
const StyledTypography = styled(Typography)({
  background: 'white',
  opacity: '0.8',
});
const Container = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        mt={5}
        sx={{ height: 600 }}
      >
        <Box sx={{ height: 600 }}>
          <StyledBox>
            <StyledTypography align='center' variant='h3'>
              Kids
            </StyledTypography>
          </StyledBox>
          <StyledBox sx={{ backgroundImage: `url(${menImage})` }}>
            <StyledTypography align='center' variant='h3'>
              Men
            </StyledTypography>
          </StyledBox>
          <StyledBox sx={{ backgroundImage: `url(${womenImage})` }}>
            <StyledTypography align='center' variant='h3'>
              Womens
            </StyledTypography>
          </StyledBox>
        </Box>
      </Stack>
    </Box>
  );
};

export default Container;
