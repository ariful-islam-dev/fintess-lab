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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  boxShadow: '0px 2px 7px rgba(51, 65, 85, 0.08)',
  textAlign: 'center',
  maxWidth: 250,
  minWidth: 250,
  margin: 0,
  padding: 0,
  color: theme.palette.text.secondary,
}));

const FlashDetails = () => {
  return (
    <Container maxWidth='lg' sx={{ my: 5, py: 5 }}>
      <Box
        sx={{
          display: 'flex',
          pr: 2,
        }}
      >
        <Typography sx={{ flexGrow: 1 }}> Flash Details</Typography>
        <Typography>
          <Button>Click here</Button>
        </Typography>
      </Box>

      <Box>
        <Grid
          container
          spacing={4}
          // sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {data.products.slice(0, 4).map((product) => (
            <Grid item xs={12} md={3} sm={3} key={product.name}>
              <Card
                sx={{
                  maxWidth: 700,
                  boxShadow: '0px 2px 7px rgba(51, 65, 85, 0.08)',
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='259'
                    image={product.image}
                    alt='green iguana'
                    sx={{ p: 2, borderRadius: '10px' }}
                  />
                  <CardContent>
                    <Typography
                      textAlign='left'
                      gutterBottom
                      variant='h6'
                      component='div'
                    >
                      Lizard
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          flexGrow: 1,
                        }}
                      >
                        <Typography
                          sx={{ mr: 1 }}
                          variant='body1'
                          color={'#D23F57'}
                        >
                          $39.50
                        </Typography>
                        <Typography sx={{}}>40</Typography>
                      </Box>
                      <Box>
                        <AddCircleOutlineSharpIcon
                          sx={{ color: '#D23F57' }}
                        ></AddCircleOutlineSharpIcon>
                      </Box>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FlashDetails;
