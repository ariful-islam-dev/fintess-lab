import { Box, CardContent, Container, Grid } from '@mui/material';
import Link from 'next/link';

import {
  Card,
  CardImage,
  CardImageBox,
  CardPrice,
  CardPricingSection,
  CardTitle,
  Section,
  SectionHeading,
  SectionTitle,
  StyledCardContent,
} from '../../Styles/Home';
import cardImg from '../../images/image 2.jpg';
import { ButtonMaster } from '../../Styles/reusable';

export default function ProductCard({ item }) {
  console.log(item.id);
  return (
    <Card>
      <CardImageBox>
        <CardImage
          src={cardImg.src}
          alt='Card Image'
          width={500}
          height={500}
          fill
        />
        <ButtonMaster
          sx={{
            position: 'absolute',
            top: '10px',
            left: '10px',
          }}
          off
        >
          {((item.attributes.price - item.attributes.discount_price) /
            item.attributes.price) *
            100}{' '}
          %OFF
        </ButtonMaster>
      </CardImageBox>
      <StyledCardContent>
        <CardTitle variant={'h4'}>
          {item.attributes.title.slice(0, 15)}
        </CardTitle>
        <CardPricingSection>
          <CardPrice>{item.attributes.price}</CardPrice>
          <Link href={`/products/${item.id}`} passHref>
            <ButtonMaster btn='light'>+</ButtonMaster>
          </Link>
        </CardPricingSection>
      </StyledCardContent>
    </Card>
  );
}
