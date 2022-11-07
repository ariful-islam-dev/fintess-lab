import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import Button from '@mui/material/Button';
import { purple, red } from '@mui/material/colors';
import data from '../../utils/data';
const primary = red[200]; // #f44336
import img4 from '../../public/images/image4.jpg';
import img5 from '../../public/images/image5.jpg';
import { TopItem } from '../../components/Styles/Home';

const MidSection = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '30px 30px 50px 30px',
    textAlign: 'start',
    color: theme.palette.text.secondary,
    borderRadius: 15,
    display: 'flex',
    alignItems: 'flex-end',
    margin: '300px',
  }));

  const midBanner1 = {
    backgroundImage: `url(${img4.src})`,

    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'black',
    backgroundSize: 'cover',
    height: 600,
    // width: 200,
    margin: 0,
  };
  const midBanner2 = {
    backgroundImage: `url(${img5.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'red',
    backgroundSize: 'cover',
    height: 600,
    // width: '80%',
    margin: 0,
  };
  // console.log('hello', img4);
  return (
    <Container sx={{}}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ md: 4, xs: 2 }}>
          <Grid item xs={7} md={7} sx={{}}>
            <TopItem sx={{ ...midBanner1 }}>
              <Box>
                <Typography sx={{ color: 'white' }} variant='h3'>
                  HOME GYM BENCH
                </Typography>
                <Typography sx={{ color: 'white' }}>
                  Fitness world a reliable & compatible source of sports &
                  fitness equipment’s company
                </Typography>
                <Button variant='contained'>BUY NOW</Button>
              </Box>
            </TopItem>
          </Grid>
          <Grid item xs={5} md={5}>
            <Item sx={midBanner2}></Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MidSection;
