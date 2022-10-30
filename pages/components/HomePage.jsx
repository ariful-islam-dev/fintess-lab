import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import chair from '../../../images/chair.png';
import { Button, Typography, Container } from '@mui/material';
import bg from '../../public/images/bannerimage.jpg';
import { AddBox } from '@mui/icons-material';

const verticalCenter = {
  display: 'flex',
  alignItems: 'center',
  height: 400,
  // border: '1px solid red'
};

const banner = {
  flexGrow: 1,
  backgroundImage: `url(${bg.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'black',
  backgroundPosition: 'center',
  backgroundSize: 'cover',

  height: 600,
  margin: 0,
};

const HomePage = () => {
  return (
    <Box sx={{ ...banner, display: 'flex', alignItems: 'center' }}>
      <Container>
        <Box>
          <Typography sx={{ color: 'white' }} variant='h2'>
            10% OFF YOUR <br />
            FIRST ORDER
          </Typography>

          <Button variant='contained' sx={{ backgroundColor: '#D23F57' }}>
            SHOP NOW
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
